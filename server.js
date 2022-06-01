const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("app is running on port: ", port);
});

////////////////////////////
app.get("/greeting/:name", (req, res) => {
  res.send(req.params.name + " It's so great to see you!");
});
/////////////////////////////

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let percentage =
    (parseInt(req.params.total) * parseInt(req.params.tipPercentage)) / 100;
  res.send("The persentage is " + percentage);
})
  /////////////////////////////



  let magicEight =["It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
  let rand = (Math.floor(Math.random()* magicEight.length))
  res.send(`<h1>${magicEight[rand]}</h1>`)
})

