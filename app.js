var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

//Vinculando Arquivos de Rotas
const route = require('./routes/app');
cosnt index = require('./routes/index');

//Definindo porta de Conexão
const port = 3000;

//Conectando com o MongoDB
mongoose.connect('mongodb://localhost:27017/atividade2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

//Conectado com o MongoDB
mongoose.connection.on('connected',()=>{
    console.log('Conectado no DB atividade2 @ 27017');
});

//Erro na conexão com o MongDB
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('Erro ao conectar no DB atividade2 @ 27017');
    }
});

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

app.use('/', index);

app.listen(port,()=>{
    console.log('Servidor rodando na porta:' + port);
});



