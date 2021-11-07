const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const {check, validationResult} = require('express-validator');

router.post("/registration", [
  check('email', 'Поле email введено не верно').isEmail(),
  check('password', 'Пароль должен содержать минимум 6 символом и максимиум 20.').isLength({min: 6, max: 20})
], async (request, response) => {
  try {
    const {email, name, password} = request.body;
    const isUsed = await User.findOne({email});
    if (isUsed) {
      return response.json({status: 300, errors: [{message: 'Данный email уже занят', field: 'email'}]});
    }
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      // errorObject - объект, в который формируется информация об ошибках
      // обработанных в middleware, в таком формате:
      // {
      //   email: 'Поле email введено не верно',
      //   password: 'Пароль должен содержать минимум 6 символом и максимиум 20.'
      // }
      const errorsObject = [];
      errors.errors.map(error => errorsObject.push({message: error.msg, field: error.param}));
      console.log({status: 400, errors: errorsObject})
      return response.json({status: 400, errors: errorsObject})
    }
    const newUser = new User({
      email, name, password
    });
    await newUser.save();
    return response.json({status: 200, message: 'Пользаватель создан'});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;