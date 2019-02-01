import {ItemDAO} from "../item-dao";
import {Item} from "../../../entity/item";
import {PoolConnection} from "mysql";
import Promise = require('promise');

export class ItemDAOImpl implements ItemDAO {

    constructor(private connection : PoolConnection){}

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT(*) as count FROM item", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0].count);
                }
            });
        });
    }

    findAll(): Promise<Array<Item>> {
        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item`,function (err , result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                }
            });

        });
    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM item WHERE code='${code}'`,function (err , result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result);
                }
            });

        });
    }

    save(entity: Item): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO item VALUES ('${entity.code}','${entity.description}','${entity.uprice}','${entity.qty}')`,function (err , result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result.affectedRows > 0 );
                }
            });

        });
    }

    update(entity: Item): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`UPDATE item SET description='${entity.description}' , uprice='${entity.uprice}' , qty = ${entity.qty} WHERE code='${entity.code}'`,function (err , result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result.affectedRows > 0 );
                }
            });

        });

    }

    delete(code: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM item WHERE code='${code}'`,function (err , result) {
                if(err){
                    reject(err);
                }else {
                    resolve(result.affectedRows > 0);
                }
            });

        });

    }

}