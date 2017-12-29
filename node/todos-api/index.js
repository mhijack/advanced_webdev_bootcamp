const express = require('express');
const todoRoutes = require('./routes/index.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// ===================================
// configuring body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ===================================

// ===================================
// serve static folder/files
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));
// ===================================

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('serving at port 3000');
});
