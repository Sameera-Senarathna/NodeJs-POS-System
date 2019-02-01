import {Customer} from "../../entity/customers";

export interface CustomerDAO extends SuperDAO<Customer,string>{
    count() : Promise<number>;
}