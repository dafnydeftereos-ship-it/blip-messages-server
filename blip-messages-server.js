const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Mensajes
app.post('/messages', (req, res) => {
  const data = req.body;
  
  console.log('\n📨 Mensaje recibido:');
  console.log(JSON.stringify(data, null, 2));
  
  if (data.type === 'text/plain') {
    console.log('\n💬 MENSAJE:');
    console.log(`  De: ${data.from}`);
    console.log(`  Contenido: ${data.content}`);
  }
  
  res.status(200).send('');
});

// Notificaciones
app.post('/notifications', (req, res) => {
  const data = req.body;
  
  console.log('\n🔔 Notificación recibida:');
  console.log(JSON.stringify(data, null, 2));
  
  res.status(200).send('');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor de Mensajes y Notificaciones activo en puerto ${PORT}`);
});

module.exports = app;
