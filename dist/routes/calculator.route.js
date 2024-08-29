"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const log_1 = require("../middlewares/log");
exports.router = (0, express_1.Router)();
exports.router.get('/', log_1.logger, (req, res) => {
    res.send({
        message: "Get All calculations",
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
});
exports.router.get('/:id', log_1.logger, log_1.logger, log_1.logger, (req, res) => {
    res.send({
        message: "Get Calculation by ID",
        id: req.params.id,
        result: 1,
    });
});
