const express = require('express');
const app = express();


app.get("/greeting/:name", (req,res)=>{
    res.send(req.params.name+" It's so great to see you!")
    })

const port = 3000;

app.listen(port, () => { 
	console.log('app is running on port: ', port)
})
