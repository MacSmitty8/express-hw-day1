const express = require('express')
const app = express();
const port = 3000;

//home page
app.get('/', (req, res) =>{
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href ='http://localhost:3000/98'> Take one down, and pass it around </a>`)
})

//next pages route

app.get("/:bottlenumber", (req, res) => {
    const nextNumber = req.params.bottlenumber -1;
    if (nextNumber >=0) {
        res.send(`<h1>${req.params.bottlenumber} bottle(s) of beer left on the wall </h1>`)
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})