import Promise = require('promise');
import {Order} from "../entity/order";
import {pool} from "../db-connection/db-connection";
import {OrderDAOImpl} from "../dao/custom/impl/order-dao-impl";
import {OrderItem} from "../entity/order-items";
import {OrderItemDAOImpl} from "../dao/custom/impl/Order_item-dao-impl";

export class OrderBO{

    findAllOrder() : Promise<Array<Order>>{

        return new Promise(function (resolve, reject) {
            pool.getConnection(function (error, connection) {
                if(error){
                    reject(error);
                }else {

                    const orderDAO = new OrderDAOImpl(connection);

                    const promise = orderDAO.findAll();

                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            })
        });
    }

    findOrder(order_id:string) : Promise<Array<OrderItem>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((error, connection) => {
                if(error){
                    reject(error);
                }else {

                    const orderItem = new OrderItemDAOImpl(connection);

                    const promise = orderItem.find(order_id);

                    promise.then(orderItems => {
                        resolve(orderItems);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    placeOrder(order: Order, orderItem: OrderItem[]) : Promise<Array<OrderItem>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((error, connection) => {
                if(error){
                    reject(error);
                }else {

                    const orderDAO = new OrderDAOImpl(connection);
                    const orderItemDAO = new OrderItemDAOImpl(connection);

                    orderDAO.save(order);

                    for(var i = 0 ; i< orderItem.length ; i++ ){
                        orderItemDAO.save(orderItem[i]);
                    }

                    resolve(true);

                }
            });
        });

    }

    countOrders() : Promise<number>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const orderDAO = new OrderDAOImpl(connection); // need to change

                    const promise = orderDAO.count();

                    promise.then(count => {
                        resolve(count);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });
    }

}