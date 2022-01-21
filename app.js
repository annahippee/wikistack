const morgan = require("morgan");
const express = require("express");
const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views/index');

const { db } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(main());
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`);
});

