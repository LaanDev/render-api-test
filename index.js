const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API online!');
});

app.get('/btc', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'usd'
      }
    });
    res.json({
      bitcoin_usd: response.data.bitcoin.usd
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o preço do Bitcoin' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
