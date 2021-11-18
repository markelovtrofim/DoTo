const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const middlewareErrors = [
  check('email', 'Поле email введено не верно').isEmail(),
  check('password', 'Пароль должен содержать минимум 6 символом.').isLength({min: 6})
]
const checkMiddlewareErrors = (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    // errorObject - объект, в который формируется информация об ошибках
    // обработанных в middleware, в таком формате:
    // {
    //   email: 'Поле email введено не верно',
    //   password: 'Пароль должен содержать минимум 6 символом и максимиум 20.'
    // }
    const errorsObject = {fields: {}, messages: []};
    errors.errors.map(error => {
      errorsObject.fields[error.param] = error.param;
      errorsObject.messages.push({message: error.msg});
    });
    return response.json({status: 400, errors: errorsObject})
  }
};

router.post("/registration", middlewareErrors, async (request, response) => {
  try {
    const {email, name, password} = request.body;
    const isUsed = await User.findOne({email});
    if (isUsed) {
      return response.json({
        status: 300, errors: {
          fields: {email: 'email'},
          messages: [{message: 'Данный email уже занят'}]
        }
      });
    }
    checkMiddlewareErrors(request, response);
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      email, name, password: hashedPassword
    });
    await newUser.save();
    return response.json({status: 200, message: 'Пользаватель создан'});
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", [
  check('email', 'Поле email введено не верно').isEmail(),
  check('password', 'Password обязателен для ввода').isLength({min: 1})
], async (request, response) => {
  try {
    const {email, password} = request.body;
    checkMiddlewareErrors(request, response);
    const user = await User.findOne({email});
    if (!user) {
      return response.json({
        status: 300, errors: {
          fields: {email: 'email'},
          messages: [{message: 'Email не найден'}]
        }
      });
    }
    bcrypt.compare(password, user.password, (error, boolean) => {
      if (boolean) {
        const jwtSecret = 'sd3af2389bfu2iw892u9wdc';
        const token = jwt.sign(
          {userId: user._id},
          jwtSecret, {expiresIn: '1h'}
        );
        return response.json({status: 200, payload: {token, userId: user._id, name: user.name}});
      } else {
        return response.json({
          status: 300, errors: {
            fields: {password: 'password'},
            messages: [{message: 'Password не верный'}]
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;