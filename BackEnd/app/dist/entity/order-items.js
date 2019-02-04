"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderItem = /** @class */ (function () {
    function OrderItem(order_id, code, quantity, unit_price) {
        this.order_id = order_id;
        this.code = code;
        this.quantity = quantity;
        this.unit_price = unit_price;
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
