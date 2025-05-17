import { Account } from "./Accout";

export class CompanyAccount extends Account {
    
    overbalance!: number;

    constructor(name: String, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
    }

    getLoan = (amout: number): void => {
        this.overbalance = this.overbalance + amout;
        console.log(`You took out a loan of $${amout}`);
    }
}