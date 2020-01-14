const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conectando mongoose: 

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-3xvjd.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 

// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


// MongoDB (Não-relacional)





app.listen(9999);