const {Router} = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async(request, response) => {
  const {userId} = request.query;
  const todo = await Todo.find({owner: userId});
  response.json(todo);
})

router.post('/add', async(request, response) => {
  const {userId, text} = request.body;
  const todo = await new Todo({
    owner: userId, text, completed: false, important: false
  });
  await todo.save();
  response.json(todo)
})

// router.post('/delete:id', async(request, response) => {
//   body
// })

module.exports = router;