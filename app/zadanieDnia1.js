const express = require('express');
const app = express();

let yes = 0;
let no = 0;

app.use(express.static('./public/zadanieDnia'));

app.get('/vote/yes', (req, res) => {
    yes++;
    res.send('<a href="/">dziękujemy za głos!</a>')
})

app.get('/vote/no', (req, res) => {
    no++;
    res.send('<a href="/">dziękujemy za głos!</a>')
})

app.get('/check', (req, res) => {
    res.send('Tak: '+ yes + ' Nie: '+ no + ' <a href="/">Back</a>');
})

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});