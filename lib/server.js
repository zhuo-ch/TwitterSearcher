const express = require('express');
const app = express();

app.get('/', (x, y) => y.send('hello'));


app.listen(3000, console.log('hello world'));
