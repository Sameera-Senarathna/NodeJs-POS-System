"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDAOImpl = /** @class */ (function () {
    function OrderDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orders", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    // Why is the Fuck this is not working
    // findAll(): Promise<Array<Order>> {
    //
    //     return new Promise(function (resolve, reject) {
    //
    //         this.connection.query("SELECT * FROM orders",function (error , result) {
    //             if (error) {
    //                 reject(error);
    //             } else {
    //                 resolve(result);
    //             }
    //         });
    //     });
    // }
    OrderDAOImpl.prototype.find = function (order_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orders WHERE order_id=" + order_id, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO orders VALUES(" + entity.order_id + "," + entity.order_date + "," + entity.c_id + ")", function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE orders SET order_data=" + entity.order_date + " , c_id=" + entity.c_id + " WHERE order_id=" + entity.order_id, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDAOImpl.prototype.delete = function (order_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM orders WHERE order_id=" + order_id, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    return OrderDAOImpl;
}());
exports.OrderDAOImpl = OrderDAOImpl;
