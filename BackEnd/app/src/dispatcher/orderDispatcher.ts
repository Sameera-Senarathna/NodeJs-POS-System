import express = require('express');
import core = require('cors');
import {OrderBO} from "../business/order-bo";

const orderDispatcher = express.Router();

export default orderDispatcher;

orderDispatcher.route("").get(function (request, response) {
    console.log("Order Dispatcher Get Method is working");
    const promise = new OrderBO().findAllOrder();

    promise.then(orders => {
        response.status(200).send(orders);
    }).catch( error => {
        response.status(500).send(error);
    });

}).post(function (request , response) {

    const promise = new OrderBO().placeOrder(request.body.order,request.body.orderDetails);
    promise.then(status => {
        response.status(201).json(status)
    }).catch(error => {
        response.status(500).send(error);
        console.log(error);
    } );

}).head(core({                              // core overide to add expose header
    exposedHeaders : ['X-count']
}),function (request , response) {

    const promise = new OrderBO().countOrders();
    promise.then(count => {
        response.append("X-count",count+"");
        response.sendStatus(200);
    }).catch(err => {
        response.sendStatus(500);
    })


});

orderDispatcher.route("/:order_id").get(function (request, response) {

    console.log("Order id is working");
    const promise = new OrderBO().findOrder(request.params.order_id);

    promise.then(orderDetails => {
        response.status(200).send(orderDetails);
    }).catch( error => {
        response.status(500).send(error);
    });

});