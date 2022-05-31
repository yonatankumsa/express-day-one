const express = require('express');
const { read } = require('fs');
const app = express();

const port = 3000;

app.listen(port, () => { 
	console.log('app is running on port: ', port)
})


////////////////////////////
app.get("/greeting/:name", (req,res)=>{
    res.send(req.params.name+" It's so great to see you!")
    })
/////////////////////////////

app.get("/tip/:total/:tipPercentage", (req,res)=>{
let percentage = parseInt(req.params.total)*  parseInt(req.params.tipPercentage)/100
res.send("The persentage is "+ percentage)
})