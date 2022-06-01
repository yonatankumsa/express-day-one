const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log("app is running on port: ", port);
});

app.get("/", (req, res) => {
  res.send(
    `99 Bottles of beer on the wall <br /> <a href="http://localhost:3000/98"> Take one down pass it around. </a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  let bottles = req.params.number_of_bottles;
  if (bottles > 0) {
    res.send(
      `${bottles} bottles of beer on the wall <br /> <a href="http://localhost:3000/${
        bottles - 1
      }"> Take one down pass it around.</a>`
    );
  } else if (bottles < 1) {
    res.send(
      `No more bottles of beer to throw at the wall <br /> <a href="http://localhost:3000/">Another round? </a>`
    );
  }
});
