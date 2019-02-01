import {ItemDTO} from "../dto/item-dto";
import Promise = require('promise');
import {pool} from "../db-connection/db-connection";
import {ItemDAOImpl} from "../dao/custom/impl/item-dao-impl";


export class ItemBO {

    findAllItem() : Promise<Array<ItemDTO>> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.findAll();

                    promise.then(items => {
                        resolve(items);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    findItem(code:string) : Promise<Array<ItemDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.find(code);

                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    saveItem(item : ItemDTO) : Promise<boolean> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.save(item);

                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    updateItem(item : ItemDTO) : Promise<boolean> {
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.update(item);

                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });
    }

    deleteItem(code:string) : Promise<boolean> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.delete(code);

                    promise.then(item => {
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    countItems() : Promise<number>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const itemDAO = new ItemDAOImpl(connection); // need to change

                    const promise = itemDAO.count();

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