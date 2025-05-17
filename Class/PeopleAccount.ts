import { Account } from "./Accout";

export class PeopleAccount extends Account {
    
    doc_id: number;

    constructor(doc_id: number, name: String, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
        this.doc_id = doc_id;
    }
}