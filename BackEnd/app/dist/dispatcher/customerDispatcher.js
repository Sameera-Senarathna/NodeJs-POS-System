"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var core = require("cors");
var customer_bo_1 = require("../business/customer-bo");
var customerDispatcher = express.Router();
exports.default = customerDispatcher;
customerDispatcher.route("").get(function (request, response) {
    var promise = new customer_bo_1.CustomerBO().findAllCustomers();
    promise.then(function (customers) {
        response.status(200).send(customers);
    }).catch(function (error) {
        response.status(500).send(error);
    });
}).post(function (request, response) {
    if (!("c_id" in request.body && "c_name" in request.body && "c_address" in request.body)) {
        response.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new customer_bo_1.CustomerBO().saveCustomer(request.body);
    promise.then(function (status) { response.status(201).json(status); }).catch(function (error) { return response.status(500).send(error); });
}).head(core({
    exposedHeaders: ['X-count']
}), function (request, response) {
    var promise = new customer_bo_1.CustomerBO().countCustomers();
    promise.then(function (count) {
        response.append("X-count", count + "");
        response.sendStatus(200);
    }).catch(function (err) {
        response.sendStatus(500);
    });
});
customerDispatcher.route("/:id").get(function (request, response) {
    var promise = new customer_bo_1.CustomerBO().findCustomer(request.params.id);
    promise.then(function (customer) {
        if (customer.length > 0) {
            response.status(200).send(customer[0]);
        }
        else {
            response.sendStatus(404);
        }
    }).catch(function (error) {
        response.status(500).send(error);
    });
}).delete(function (request, response) {
    var promise = new customer_bo_1.CustomerBO().deleteCustoner(request.params.id);
    promise.then(function (status) {
        if (status) {
            response.status(200).send(true);
        }
        else {
            response.sendStatus(404);
        }
    }).then(function (error) {
        response.status(500).send(error);
    });
}).put(function (request, response) {
    if (!("c_id" in request.body && "c_name" in request.body && "c_address" in request.body)) {
        response.status(400).send("Invalid Request Body");
        return;
    }
    if (request.params.id !== request.body.c_id) {
        response.status(400).send("Mismatch customer ID");
        return;
    }
    var promise = new customer_bo_1.CustomerBO().updateCustomer(request.body);
    promise.then(function (status) {
        if (status) {
            response.status(200).send(true);
        }
        else {
            response.sendStatus(404);
        }
    }).catch(function (error) {
        response.status(500).send(error);
    });
});
