import { Account } from "./Accout";

export class PeopleAccountPlus extends Account {
    
    doc_id: number;
    overbalance!: number;

    constructor(doc_id: number, name: String, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
        this.doc_id = doc_id;
    }

    deposit = (loanAmount: number): void => {
        try {
            this._internalCreditOperatio(loanAmount + 10);
            this.overbalance += loanAmount;
            console.log(`You took out a loan of $${loanAmount}. Updated balance: $${this.getBalance()}.`)
        } catch (error) {
            console.error('Failed to Complete')
        }   
    }
}