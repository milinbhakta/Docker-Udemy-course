const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let userGoal = "Learn Docker!!";

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    `<html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <div class="row">
    <div class="col s12">
    <div class="card">
    <div class="card-content">
    <span class="card-title"><h4>My Course Goal</h4></span>
    <p>${userGoal}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col s12">
    <div class="card">
    <div class="card-content">
    <form action="/store-goal" method="POST">
    <div class="form-control">
    <div class="input-field">
    <label for="icon_prefix2">Enter your course goal</label>
    <input id="goal" name="goal" type="text" class="validate">
    </div>
    </div>
    <button class="btn waves-effect waves-light" type="submit" >Set Course Goal</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" defer></script>
    </body>
    </html>`
  );
});

app.post("/store-goal", (req, res) => {
  enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect("/");
});

app.listen(8080);
