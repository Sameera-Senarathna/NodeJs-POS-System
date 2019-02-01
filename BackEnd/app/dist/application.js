"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mainDispatcher_1 = __importDefault(require("./dispatcher/mainDispatcher"));
var app = express();
app.use(mainDispatcher_1.default);
app.listen(3000, function () {
    console.log("Server Is Listing at Port : 3000");
});
