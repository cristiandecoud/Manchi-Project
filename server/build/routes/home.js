"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = require("express");
const openai_1 = require("../services/openai");
exports.homeRoute = (0, express_1.Router)();
exports.homeRoute.get('/', (req, res) => {
    res.send("Default home route");
});
exports.homeRoute.get('/code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = req.query.prompt;
    const temperature = req.query.temperature;
    try {
        const resp = yield (0, openai_1.getCode)(prompt, temperature);
        res.status(200).json(resp.data.choices[0].text);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.homeRoute.get('/text', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = req.query.prompt;
    const temperature = req.query.temperature;
    try {
        const resp = yield (0, openai_1.getCode)(prompt, temperature);
        res.status(200).json(resp.data.choices[0].text);
    }
    catch (error) {
        console.log(error);
    }
}));
