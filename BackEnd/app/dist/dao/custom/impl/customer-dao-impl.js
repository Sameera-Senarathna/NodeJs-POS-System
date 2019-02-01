"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var CustomerDAOImpl = /** @class */ (function () {
    function CustomerDAOImpl(connection) {
        this.connection = connection;
    } // what is this pool connection
    CustomerDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT(*) as count FROM customer", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result[0].count);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM customer WHERE c_id='" + id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO customer VALUES ('" + entity.c_id + "','" + entity.c_name + "','" + entity.c_address + "')", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE customer SET c_name='" + entity.c_name + "' , c_address='" + entity.c_address + "' WHERE c_id='" + entity.c_id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM customer WHERE c_id='" + id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    return CustomerDAOImpl;
}());
exports.CustomerDAOImpl = CustomerDAOImpl;
