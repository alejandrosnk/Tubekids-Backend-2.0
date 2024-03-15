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
const { userPost, userGet, loginGet } = require('./controllers/userController');
const { videoGet,  videoPost,  videoPatch,  videoDelete} = require('./controllers/playlistController');
const { childrenGet,  childrenPost,  childrenPatch,  childrenDelete, childrenLogin} = require('./controllers/childrenController');
app.use(cors({
  domains: '*',
  methods: "*"
}));

app.get("/api/users/",userGet);
app.get("/api/userLogin/",loginGet);
app.post("/api/users", userPost);

app.get("/api/videos/",videoGet);
app.post("/api/videos", videoPost);
app.patch("/api/videos", videoPatch);
app.delete("/api/videos", videoDelete);

app.get("/api/childrens/",childrenGet);
app.get("/api/childrenLogin",childrenLogin);
app.post("/api/childrens", childrenPost);
app.patch("/api/childrens", childrenPatch);
app.delete("/api/childrens", childrenDelete);

app.listen(3001, () => console.log(`Example app listening on port 3001!`))