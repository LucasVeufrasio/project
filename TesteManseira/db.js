const mysql = require('mysql2');

//configura a  conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'livraria'
});

//realiza a conexao com o BD
conexao.connect((erro) =>{
    if (erro) 
    {
        console.log("Deu ruim",erro.stack);
        return;
    }
    console.log('conexao realizada');
});

module.exports = conexao;