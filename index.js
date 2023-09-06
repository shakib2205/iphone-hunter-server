const express = require ('express');
const app = express();
const phones = require('./phones.json')
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Iphone Server Running')
});

app.get('/phones',(req, res) => {
    res.send(phones)
})

app.listen(port, () => {
    console.log(`Iphone Server is Running on Port :${port}`)
});
1