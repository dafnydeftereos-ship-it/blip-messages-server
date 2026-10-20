const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/messages', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en puerto ${PORT}`);
});

module.exports = app;
