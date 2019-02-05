import {OrderItemDAO} from "../order_item-dao";
import {OrderItem} from "../../../entity/order-items";
import {PoolConnection} from "mysql";
import Promise = require('promise');

export class OrderItemDAOImpl implements OrderItemDAO{

    constructor(private connection: PoolConnection) {
    }

    findAll(): Promise<Array<OrderItem>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM order_item`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });

        });
    }

    find(order_id: string): Promise<Array<OrderItem>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM order_item WHERE order_id='${order_id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });

        });
    }

    save(entity: OrderItem): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO order_item VALUES (${entity.order_id},'${entity.code}',${entity.quantity},${entity.unit_price})`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

    update(entity: OrderItem): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`UPDATE order_item SET code='${entity.code}' , quantity='${entity.quantity}', unit_price='${entity.unit_price}' WHERE order_id='${entity.order_id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

    delete(order_id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM order_item WHERE c_id='${order_id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

}