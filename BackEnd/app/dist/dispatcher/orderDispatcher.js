"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var core = require("cors");
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
}).post(function (request, response) {
    var promise = new order_bo_1.OrderBO().placeOrder(request.body.order, request.body.orderDetails);
    promise.then(function (status) {
        response.status(201).json(status);
    }).catch(function (error) {
        response.status(500).send(error);
        console.log(error);
    });
}).head(core({
    exposedHeaders: ['X-count']
}), function (request, response) {
    var promise = new order_bo_1.OrderBO().countOrders();
    promise.then(function (count) {
        response.append("X-count", count + "");
        response.sendStatus(200);
    }).catch(function (err) {
        response.sendStatus(500);
    });
});
orderDispatcher.route("/:order_id").get(function (request, response) {
    console.log("Order id is working");
    var promise = new order_bo_1.OrderBO().findOrder(request.params.order_id);
    promise.then(function (orderDetails) {
        response.status(200).send(orderDetails);
    }).catch(function (error) {
        response.status(500).send(error);
    });
});
