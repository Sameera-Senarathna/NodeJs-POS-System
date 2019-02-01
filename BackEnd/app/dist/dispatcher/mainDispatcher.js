"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customerDispatcher_1 = __importDefault(require("./customerDispatcher"));
var itemDispatcher_1 = __importDefault(require("./itemDispatcher"));
var cors = require("cors");
var mainDispatcher = express.Router();
mainDispatcher.use(cors());
mainDispatcher.use(express.json());
mainDispatcher.use("/api/v1/customers", customerDispatcher_1.default);
mainDispatcher.use("/api/v1/items", itemDispatcher_1.default);
exports.default = mainDispatcher;
