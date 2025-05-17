import { Account } from "./Accout";

export class CompanyAccount extends Account {
    
    overbalance!: number;

    constructor(name: String, accountNumber: number, balance: number) {
        super(name, accountNumber, balance);
        this.overbalance = 0;
    }

    getLoan = (loanAmount: number): void => {
        try {
            this._internalCreditOperatio(loanAmount);
            this.overbalance += loanAmount;
            console.log(`You took out a loan of $${loanAmount}. Updated balance: $${this.getBalance()}.`)
        } catch (error) {
            console.error('Failed to Complete')
        }   
    }
}