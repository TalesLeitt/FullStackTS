import { Account } from "./Accout";

export class PeopleAccountPlus extends Account {
    
    doc_id: number;
    overbalance!: number;

    constructor(doc_id: number, name: String, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
        this.doc_id = doc_id;
    }

     deposit = (amount: number): void => {
        this.overbalance = this.getBalance();
        console.log(`You deposited an amount: $${amount}`);
        
    }
}