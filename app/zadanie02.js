const express = require('express');
const app = express();

let imie = '';

app.get('/name/set/:imie', (req, res) => {
    imie = req.params.imie;

    res.send('Imie to: ' + imie);
});

app.get('/name/show', (req, res) => {
        res.send('Sprawdzilem, masz na imie: ' + imie);
});

app.get('/name/check', (req, res) => {
    if(!imie){
        res.send('To imie nie zostało zapisane');
    } else {
        res.send('To imie zostało zapisane');
    }
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});