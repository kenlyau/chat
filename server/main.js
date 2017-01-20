const express = require("express");
const horizon = require("@horizon/server");
const horizonOptions = require("../config/horizon");
const jwt = require("jsonwebtoken");

const port = 8181;
const app = express();
app.use(express.static('client'));

const httpServer = app.listen(port);

const horizonServer = horizon(httpServer, horizonOptions);

console.log(`listening on port ${port}`);

function generateToken(tokensecret, id){
    return jwt.sign(
         {id: id},
         new Buffer(tokensecret, 'base64'),
         {expiresIn: '1h', algorithm: 'HS512'}
    )
}

app.get('/login', function(req, res) {
    console.log(req.query.id);
    var result = {
        token: generateToken(horizonOptions.auth.token_secret,req.query.id)
    };
    return res.json(result);
    
})
