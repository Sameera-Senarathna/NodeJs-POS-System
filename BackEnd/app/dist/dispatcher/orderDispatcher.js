"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var order_bo_1 = require("../business/order-bo");
var orderDispatcher = express.Router();
exports.default = orderDispatcher;
orderDispatcher.route("").get(function (request, response) {
    console.log("Order Dispatcher Get Method is working");
    var promise = new order_bo_1.OrderBO().findAllOrder();
    promise.then(function (orders) {
        response.status(200).send(orders);
    }).catch(function (error) {
        response.status(500).send(error);
    });
});
