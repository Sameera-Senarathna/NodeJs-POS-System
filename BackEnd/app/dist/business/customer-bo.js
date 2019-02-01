"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_connection_1 = require("../db-connection/db-connection");
var customer_dao_impl_1 = require("../dao/custom/impl/customer-dao-impl");
var CustomerBO = /** @class */ (function () {
    function CustomerBO() {
    }
    CustomerBO.prototype.findAllCustomers = function () {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.findAll();
                    promise.then(function (customers) {
                        resolve(customers);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.findCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.find(id);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.saveCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.save(customer);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.updateCustomer = function (customer) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.update(customer);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.deleteCustoner = function (id) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.delete(id);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBO.prototype.countCustomers = function () {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = new customer_dao_impl_1.CustomerDAOImpl(connection); // need to change
                    var promise = customerDAO.count();
                    promise.then(function (count) {
                        resolve(count);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return CustomerBO;
}());
exports.CustomerBO = CustomerBO;
