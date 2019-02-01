import {CustomerDAO} from "../customer-dao";
import {Customer} from "../../../entity/customers";
import Promise = require('promise');
import {PoolConnection} from "mysql";

export class CustomerDAOImpl implements CustomerDAO {

    constructor(private connection: PoolConnection) {
    }    // what is this pool connection

    count(): Promise<number> {

        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT(*) as count FROM customer", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0].count);
                }
            });
        });
    }


    findAll(): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });

        });
    }

    find(id: string): Promise<Array<Customer>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM customer WHERE c_id='${id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });

        });

    }

    save(entity: Customer): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO customer VALUES ('${entity.c_id}','${entity.c_name}','${entity.c_address}')`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

    update(entity: Customer): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`UPDATE customer SET c_name='${entity.c_name}' , c_address='${entity.c_address}' WHERE c_id='${entity.c_id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM customer WHERE c_id='${id}'`, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.affectedRows > 0);
                }
            });

        });
    }

}