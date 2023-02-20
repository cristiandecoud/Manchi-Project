"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoute = void 0;
const express_1 = require("express");
exports.contactRoute = (0, express_1.Router)();
exports.contactRoute.get('/', (req, res) => {
    res.send("Default contact route");
});
exports.contactRoute.get('/detail', (req, res) => {
    res.send("Contact detail route");
});
