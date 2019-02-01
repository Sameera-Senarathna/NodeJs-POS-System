"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var item_bo_1 = require("../business/item-bo");
var itemDispatcher = express.Router();
exports.default = itemDispatcher;
itemDispatcher.route("").get(function (request, response) {
    var promise = new item_bo_1.ItemBO().findAllItem();
    promise.then(function (items) {
        response.status(200).send(items);
    }).catch(function (error) {
        response.status(500).send(error);
    });
}).post(function (request, response) {
    if (!("code" in request.body && "description" in request.body && "uprice" in request.body && "qty" in request.body)) {
        response.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new item_bo_1.ItemBO().saveItem(request.body);
    promise.then(function (status) { response.status(201).json(status); }).catch(function (error) { return response.status(500).send(error); });
}).head(cors({
    exposedHeaders: ['X-count']
}), function (request, response) {
    var promise = new item_bo_1.ItemBO().countItems();
    promise.then(function (count) {
        response.append("X-count", count + "");
        response.sendStatus(200);
    }).catch(function (err) {
        response.sendStatus(500);
    });
});
itemDispatcher.route("/:code").get(function (request, response) {
    var promise = new item_bo_1.ItemBO().findItem(request.params.code);
    promise.then(function (item) {
        if (item.length > 0) {
            response.status(200).send(item[0]);
        }
        else {
            response.sendStatus(404);
        }
    }).catch(function (error) {
        response.status(500).send(error);
    });
}).delete(function (request, response) {
    var promise = new item_bo_1.ItemBO().deleteItem(request.params.code);
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
    if (!("code" in request.body && "description" in request.body && "uprice" in request.body && "qty" in request.body)) {
        response.status(400).send("Invalid Request Body");
        return;
    }
    if (request.params.code !== request.body.code) {
        response.status(400).send("Mismatch code ID");
        return;
    }
    var promise = new item_bo_1.ItemBO().updateItem(request.body);
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
