"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderItemDAOImpl = /** @class */ (function () {
    function OrderItemDAOImpl(connection) {
        this.connection = connection;
    }
    OrderItemDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM order_item", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderItemDAOImpl.prototype.find = function (order_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM order_item WHERE order_id='" + order_id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderItemDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO order_item VALUES (" + entity.order_id + ",'" + entity.code + "'," + entity.quantity + "," + entity.unit_price + ")", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderItemDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE order_item SET code='" + entity.code + "' , quantity='" + entity.quantity + "', unit_price='" + entity.unit_price + "' WHERE order_id='" + entity.order_id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderItemDAOImpl.prototype.delete = function (order_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM order_item WHERE c_id='" + order_id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    return OrderItemDAOImpl;
}());
exports.OrderItemDAOImpl = OrderItemDAOImpl;
