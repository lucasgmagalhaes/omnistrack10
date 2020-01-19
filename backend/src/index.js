const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(
  "mongodb://lucas:lucas@omnistack-shard-00-00-aasnr.mongodb.net:27017,omnistack-shard-00-01-aasnr.mongodb.net:27017,omnistack-shard-00-02-aasnr.mongodb.net:27017/test?ssl=true&replicaSet=omnistack-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
