"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_connection_1 = require("../db-connection/db-connection");
var order_dao_impl_1 = require("../dao/custom/impl/order-dao-impl");
var Order_item_dao_impl_1 = require("../dao/custom/impl/Order_item-dao-impl");
var OrderBO = /** @class */ (function () {
    function OrderBO() {
    }
    OrderBO.prototype.findAllOrder = function () {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (error, connection) {
                if (error) {
                    reject(error);
                }
                else {
                    var orderDAO = new order_dao_impl_1.OrderDAOImpl(connection);
                    var promise = orderDAO.findAll();
                    promise.then(function (orders) {
                        resolve(orders);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.findOrder = function (order_id) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (error, connection) {
                if (error) {
                    reject(error);
                }
                else {
                    var orderItem = new Order_item_dao_impl_1.OrderItemDAOImpl(connection);
                    var promise = orderItem.find(order_id);
                    promise.then(function (orderItems) {
                        resolve(orderItems);
                        db_connection_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_connection_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderBO.prototype.placeOrder = function (order, orderItem) {
        return new Promise(function (resolve, reject) {
            db_connection_1.pool.getConnection(function (error, connection) {
                if (error) {
                    reject(error);
                }
                else {
                    var orderDAO = new order_dao_impl_1.OrderDAOImpl(connection);
                    var orderItemDAO = new Order_item_dao_impl_1.OrderItemDAOImpl(connection);
                    var orderSavePromise = orderDAO.save(order);
                    for (var i = 0; i < orderItem.length; i++) {
                        orderItemDAO.save(orderItem[i]);
                    }
                }
            });
        });
    };
    return OrderBO;
}());
exports.OrderBO = OrderBO;
