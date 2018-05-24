const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there',
            bye: 'buddy'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on PORT : ${PORT}`);
});
