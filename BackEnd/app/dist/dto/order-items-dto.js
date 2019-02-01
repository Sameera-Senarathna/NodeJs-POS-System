"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderItems = /** @class */ (function () {
    function OrderItems(orderId, code, quantity, unitPrice) {
        this.orderId = orderId;
        this.code = code;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
    return OrderItems;
}());
exports.OrderItems = OrderItems;
