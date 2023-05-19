const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9900;


//dbcon
const db = require("./config/db").mongoURI;
app.use(cors())
//var conn
mongoose.connect(db, {useUnifiedTopology: true});
app.use(express.urlencoded({extended:false}));
app.use(express.json())
//Engines

//route
app.use("/", require("./eduRoute"))

app.listen(() => console.log(`started port ${port}`));



