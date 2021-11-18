const {Router} = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.post('/add', async(request, response) => {
  const {userId, text} = request.body;
  const todo = await new Todo({
    owner: userId, text, completed: false, important: false
  });
  await todo.save();
  response.json(todo)
})

module.exports = router;