var express = require('express');
var router = express.Router();

const Curso = require('../models/cursos');

//Recebendo Cursos
router.get('/cursos', (req, res, next) => {
    Curso.find(function(err, cursos){
        res.json(cursos);
    })
});

//Adicionando Cursos
router.post('/curso', (req, res, next) => {
    let newCurso = new Curso({
        nome: req.body.nome,
        coordenador: req.body.coordenador,
    });

    newCurso.save((err, curso)=>{
        if(err)
        {
            res.json({msg:'Falha ao adicionar Curso'});
        }
        else{
            res.json({msg: 'Curso adicionado com Sucesso'});
        }
    })
});

//Deletando Cursos
router.delete('/cursos/:id', (req, res, next) => {
    Curso.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        } 
        else{
            res.json(result);
        }
    })
    
});


module.exports = router;