const express = require("express");
const app = express();
const port = 3000;
const db = require('./db');
//define o EJS como motor de visualização
app.set('view engine','ejs');


//rotas
app.get('/', (req, res) =>{
    
    db.query('select * from livros order by livtitulo', (erro, resultado) =>{
        if (erro){
            console.log('Deu erro na query', erro.stack);
            res.status(500).send('erro ao consultar o banco de dados');
            return;
        }
        res.render('index', {
            titulo: 'Listagem de livros',
            registros: resultado
        });
        
    });
    
});


  


//liga o servidor
app.listen(port, () => {
    console.log("servidor ligado na porta ",+ port .toString());
});