"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const routes = require("./router/index");
const path = require('path');
const setMiddleware = require("./middleware/index");
const express = require('express');
const MyDataSource = require('./config/database');
const app = express();
app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const { PORT } = process.env;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
setMiddleware(app);
app.get('/', (req, res) => {
    res.send('ok');
});
app.use(routes);
MyDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
    console.log("database initialized successfully");
})
    .catch((error) => console.log(error));
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map