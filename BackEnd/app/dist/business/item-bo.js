"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_connection_1 = require("../db-connection/db-connection");
var item_dao_impl_1 = require("../dao/custom/impl/item-dao-impl");
var ItemBO = /** @class */ (function () {
    function ItemBO() {
    }
    ItemBO.prototype.findAllItem = function () {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.findAll();
                    promise.then(function (items) {
                        resolve(items);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.findItem = function (code) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.find(code);
                    promise.then(function (item) {
                        resolve(item);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.saveItem = function (item) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.save(item);
                    promise.then(function (item) {
                        resolve(item);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.updateItem = function (item) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.update(item);
                    promise.then(function (item) {
                        resolve(item);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.deleteItem = function (code) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.delete(code);
                    promise.then(function (item) {
                        resolve(item);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.countItems = function () {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = new item_dao_impl_1.ItemDAOImpl(connection); // need to change
                    var promise = itemDAO.count();
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
    return ItemBO;
}());
exports.ItemBO = ItemBO;
