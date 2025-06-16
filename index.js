const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'OK from Docker!' });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
