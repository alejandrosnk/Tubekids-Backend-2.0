const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/users");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
const { userPost, userGet } = require('./controllers/userController');
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request
app.get("/api/users/",userGet);
app.post("/api/users", userPost);
// app.patch("/api/careers", careerPatch);
// app.put("/api/careers", careerPatch);
// app.delete("/api/careers", careerDelete);


app.listen(3001, () => console.log(`Example app listening on port 3001!`))