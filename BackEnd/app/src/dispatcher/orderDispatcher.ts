import express = require('express');
import cors = require('cors');
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

})