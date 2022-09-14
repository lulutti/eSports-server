import express from 'express'

const app = express();

app.get('/hola', (request, response) => response.json([ { id: 1, name: 'anuncio 1'}, { id: 2, name: 'anuncio 2222'}, ]))

app.listen(3333);