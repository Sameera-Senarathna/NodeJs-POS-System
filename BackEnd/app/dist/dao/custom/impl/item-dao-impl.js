"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDAOImpl = /** @class */ (function () {
    function ItemDAOImpl(connection) {
        this.connection = connection;
    }
    ItemDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT(*) as count FROM item", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result[0].count);
                }
            });
        });
    };
    ItemDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM item", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ItemDAOImpl.prototype.find = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM item WHERE code='" + code + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ItemDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO item VALUES ('" + entity.code + "','" + entity.description + "','" + entity.uprice + "','" + entity.qty + "')", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE item SET description='" + entity.description + "' , uprice='" + entity.uprice + "' , qty = " + entity.qty + " WHERE code='" + entity.code + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    ItemDAOImpl.prototype.delete = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM item WHERE code='" + code + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    return ItemDAOImpl;
}());
exports.ItemDAOImpl = ItemDAOImpl;
