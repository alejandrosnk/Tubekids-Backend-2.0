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
const { playlistGet,  playlistPost,  playlistPatch,  playlistDelete} = require('./controllers/playlistController');
const { childrenGet,  childrenPost,  childrenPatch,  childrenDelete} = require('./controllers/childrenController');
app.use(cors({
  domains: '*',
  methods: "*"
}));

app.get("/api/users/",userGet);
app.post("/api/users", userPost);

app.get("/api/playlists/",playlistGet);
app.post("/api/playlists", playlistPost);
app.patch("/api/playlists", playlistPatch);
app.delete("/api/playlists", playlistDelete);

app.get("/api/childrens/",childrenGet);
app.post("/api/childrens", childrenPost);
app.patch("/api/childrens", childrenPatch);
app.delete("/api/childrens", childrenDelete);

app.listen(3001, () => console.log(`Example app listening on port 3001!`))