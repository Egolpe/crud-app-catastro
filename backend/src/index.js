const express = require("express");

const app = express();

// midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index"));

app.listen(8080);
console.log("Server on port 8080");
