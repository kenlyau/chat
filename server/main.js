const express = require("express");
const horizon = require("@horizon/server");
const horizonOptions = require("../config/horizon");

const port = 8181;
const app = express();
app.use(express.static('client'));

const httpServer = app.listen(port);

const horizonServer = horizon(httpServer, horizonOptions);

console.log(`listening on port ${port}`);
