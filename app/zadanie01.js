const express = require('express');
const app = express();

/* Routing z parametrem */
app.get('/:firstnumber/:secondnumber', (req, res) => {
    const firstNumber = req.params.firstnumber;
    const secondNumber = req.params.secondnumber;
    const sum = Number(firstNumber) + Number(secondNumber);
    res.send('Wynik to ' + sum);
})

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});