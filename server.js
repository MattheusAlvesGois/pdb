const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./api/controller/controller')(app);
require('./database/connect');

app.listen(3000, console.log("listening on http://localhost:3000"));