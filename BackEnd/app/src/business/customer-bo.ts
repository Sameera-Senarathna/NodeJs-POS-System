import {CustomerDTO} from "../dto/customer-dto";
import Promise = require('promise');
import {pool} from "../db-connection/db-connection";
import {CustomerDAOImpl} from "../dao/custom/impl/customer-dao-impl";

export class CustomerBO {

    findAllCustomers() : Promise<Array<CustomerDTO>> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.findAll();

                    promise.then(customers => {
                        resolve(customers);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    findCustomer(id:string) : Promise<Array<CustomerDTO>>{

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.find(id);

                    promise.then(customer => {
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    saveCustomer(customer : CustomerDTO) : Promise<boolean> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.save(customer);

                    promise.then(customer => {
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    updateCustomer(customer : CustomerDTO) : Promise<boolean> {
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.update(customer);

                    promise.then(customer => {
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });
    }

    deleteCustoner(id:string) : Promise<boolean> {

        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.delete(id);

                    promise.then(customer => {
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error => {
                        reject(error);
                        pool.releaseConnection(connection);
                    } );

                }
            });
        });

    }

    countCustomers() : Promise<number>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {
                if(err){
                    reject(err);
                }else {

                    const customerDAO = new CustomerDAOImpl(connection); // need to change

                    const promise = customerDAO.count();

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