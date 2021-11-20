const {Router} = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async(request, response) => {
  const {userId} = request.query;
  const todo = await Todo.find({owner: userId});
  response.json(todo);
});

router.post('/add', async(request, response) => {
  const {userId, text} = request.body;
  const todo = await new Todo({
    owner: userId, text, completed: false, important: false
  });
  await todo.save();
  response.json(todo);
});

router.delete('/delete/:id', async(request, response) => {
  const todo = await Todo.findOneAndDelete({_id: request.params.id});
  response.json(todo);
});

router.put('/completed/:id', async(request, response) => {
  const todo = await Todo.findOne({_id: request.params.id});
  todo.completed = !todo.completed;
  await todo.save();
  console.log(todo)
  response.json(todo);
});

router.put('/important/:id', async(request, response) => {
  const todo = await Todo.findOne({_id: request.params.id});
  todo.important = !todo.important;
  await todo.save();
  response.json(todo);
});

module.exports = router;