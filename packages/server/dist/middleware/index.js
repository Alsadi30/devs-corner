"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const middleware = [
    cors(),
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
];
module.exports = (app) => {
    middleware.forEach(m => {
        app.use(m);
    });
};
//# sourceMappingURL=index.js.map