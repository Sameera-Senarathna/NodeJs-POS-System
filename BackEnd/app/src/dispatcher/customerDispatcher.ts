import express = require('express');
import core = require('cors');
import {CustomerBO} from "../business/customer-bo";

const customerDispatcher = express.Router();

export default customerDispatcher;

customerDispatcher.route("").get(function (request , response) {


    const promise = new CustomerBO().findAllCustomers();
    promise.then(customers => {
        response.status(200).send(customers);
    }).catch( error => {
        response.status(500).send(error);
    });

}).post(function (request , response) {

    if(!("c_id" in request.body && "c_name" in request.body && "c_address" in request.body )){
        response.status(400).send("Invalid Request Body");
        return;
    }

   const promise = new CustomerBO().saveCustomer(request.body);
    promise.then(status => { response.status(201).json(status)} ).catch(error => response.status(500).send(error) );

}).head(core({                              // core overide to add expose header
    exposedHeaders : ['X-count']
}),function (request , response) {

    const promise = new CustomerBO().countCustomers();
    promise.then(count => {
        response.append("X-count",count+"");
        response.sendStatus(200);
    }).catch(err => {
        response.sendStatus(500);
    })


});

customerDispatcher.route("/:id").get(function (request , response) {

    const promise = new CustomerBO().findCustomer(request.params.id);

    promise.then(customer => {
        if(customer.length > 0){
            response.status(200).send(customer[0]);
        }else {
            response.sendStatus(404);
        }
    }).catch(error => {
       response.status(500).send(error);
    });

}).delete(function (request , response) {

    const promise = new CustomerBO().deleteCustoner(request.params.id);

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

    if(!("c_id" in request.body && "c_name" in request.body && "c_address" in request.body )){
        response.status(400).send("Invalid Request Body");
        return;
    }

    if(request.params.id !== request.body.c_id){
        response.status(400).send("Mismatch customer ID");
        return;
    }

    const promise = new CustomerBO().updateCustomer(request.body);
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
