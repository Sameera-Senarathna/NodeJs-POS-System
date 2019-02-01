import express = require('express');
import cors = require('cors');
import {ItemBO} from "../business/item-bo";

const itemDispatcher = express.Router();

export default itemDispatcher;

itemDispatcher.route("").get(function (request , response) {

    const promise = new ItemBO().findAllItem();

    promise.then(items => {
        response.status(200).send(items);
    }).catch( error => {
        response.status(500).send(error);
    });

}).post(function (request , response) {

    if(!("code" in request.body && "description" in request.body && "uprice" in request.body && "qty" in request.body)){
        response.status(400).send("Invalid Request Body");
        return;
    }

    const promise = new ItemBO().saveItem(request.body);
    promise.then(status => { response.status(201).json(status)} ).catch(error => response.status(500).send(error) );

}).head(cors({
    exposedHeaders : ['X-count']
}),function (request , response) {

    const promise = new ItemBO().countItems();
    promise.then(count => {
        response.append("X-count",count+"");
        response.sendStatus(200);
    }).catch(err => {
        response.sendStatus(500);
    })


});

itemDispatcher.route("/:code").get(function (request , response) {

    const promise = new ItemBO().findItem(request.params.code);

    promise.then(item => {
        if(item.length > 0){
            response.status(200).send(item[0]);
        }else {
            response.sendStatus(404);
        }
    }).catch(error => {
        response.status(500).send(error);
    });

}).delete(function (request , response) {

    const promise = new ItemBO().deleteItem(request.params.code);

    promise.then( status => {
        if(status){
            response.status(200).send(true);
        }else {
            response.sendStatus(404);
        }
    }).then(error => {
        response.status(500).send(error);
    });

}).put(function (request , response) {

    if(!("code" in request.body && "description" in request.body && "uprice" in request.body && "qty" in request.body)){
        response.status(400).send("Invalid Request Body");
        return;
    }

    if(request.params.code !== request.body.code){
        response.status(400).send("Mismatch code ID");
        return;
    }

    const promise = new ItemBO().updateItem(request.body);
    promise.then(status => {
        if (status){
            response.status(200).send(true);
        }else{
            response.sendStatus(404);
        }
    }).catch(error => {
        response.status(500).send(error);
    });

})
