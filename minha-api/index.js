const express = require('express');
const cors = require('cors');      
const app = express();
const port = 3000;

app.use(cors());                   
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.get('/alunos', (req, res) => {
  res.json([
    { id: 1, nome: 'Johanna' },
    { id: 2, nome: 'Johaine' },
    { id: 3, nome: 'Rianna' },
    { id: 4, nome: 'Lunna' }
  ]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});