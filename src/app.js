const express = require('express');
const app = express();

app.get((request, response) => response.send('Funcionando!!!'));

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333!');
});