"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("./home");
const contact_1 = require("./contact");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send("Default route");
});
router.use('/home', home_1.homeRoute);
router.use('/contact', contact_1.contactRoute);
exports.default = router;
