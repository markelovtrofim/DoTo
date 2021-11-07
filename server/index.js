const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth.route'));

const Start = async () => {
  try {
    await mongoose.connect('mongodb+srv://padre:Fo7Re2St@cluster0.q7yie.mongodb.net/todo?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`Server start on PORT - ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
};

Start().then(r => null);