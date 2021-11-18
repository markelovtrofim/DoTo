const {Schema, model, Types} = require('mongoose');

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  todos: [{type: Types.ObjectId, ref: 'Todo'}]
});

module.exports = model('User', UserSchema);