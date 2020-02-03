const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database

mongoose
  .connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true })
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

//Middleware

app.use(express.urlencoded({ extended:true }));
app.use(express.json());;

//Controllers

const UserConrol = require('./controllers/UserControl');


//Routes

app.post('/api/user/create', UserConrol.create);
app.post('/api/user/update', UserConrol.update);
app.get('/api/user/retrieve', UserConrol.retrieve);
app.delete('/api/user/delete', UserConrol.delete);

//Start Server

app.listen(3000,() => console.log('Server has started on port 3000...'));