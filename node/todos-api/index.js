const express = require('express');
const todoRoutes = require('./routes/index.js');
const bodyParser = require('body-parser');

const app = express();

// configuring body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('root route');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('serving at port 3000');
});
