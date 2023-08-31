// importar Express
const express = require ('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Estou utilizando o Express!")
})