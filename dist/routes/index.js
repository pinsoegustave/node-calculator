"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorRouter = exports.healthRouter = void 0;
var health_route_1 = require("./health.route");
Object.defineProperty(exports, "healthRouter", { enumerable: true, get: function () { return health_route_1.router; } });
var calculator_route_1 = require("./calculator.route");
Object.defineProperty(exports, "calculatorRouter", { enumerable: true, get: function () { return calculator_route_1.router; } });
