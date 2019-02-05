import {OrderDAO} from "../order-dao";
import {Order} from "../../../entity/order";
import {PoolConnection} from "mysql";
import Promise = require('promise');

export class OrderDAOImpl implements OrderDAO{

    constructor(private connection: PoolConnection) {}

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT(*) as count FROM orders", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0].count);
                }
            });
        });
    }

    findAll(): Promise<Array<Order>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM orders`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });

        });
    }

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

    find(order_id: string): Promise<Array<Order>> {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM orders WHERE order_id=${order_id}`,function (error , result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }

    save(entity: Order): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO orders VALUES(${entity.order_id},'${entity.order_date}','${entity.c_id}')`,function (error , result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }

    update(entity: Order): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE orders SET order_data=${entity.order_date} , c_id=${entity.c_id} WHERE order_id=${entity.order_id}`,function (error , result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }

    delete(order_id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`DELETE FROM orders WHERE order_id=${order_id}`,function (error , result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }

}