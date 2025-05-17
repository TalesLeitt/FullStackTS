export abstract class Account {
    private readonly name: String;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: Boolean = true;
    private amount!: number;

    constructor (name: String, accountNumber: number, balance: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getName = (): String => {
        return this.name;
    }

    deposit = (amount: number): void => {
        this.amount = amount;

        if (this.validadeStatus()) {
            this.balance = this.balance + this.amount;
            console.log(`You deposited an amount: $${this.amount}`);
        }
    }

    withdraw = (amount: number): void => {
        this.amount = amount;

        if (this.validadeStatus() && this.balance > this.amount) {
            this.balance = this.balance - this.amount;
            console.log(`You made a withdrwal of: $${this.amount}`);
        }
    }

    getBalance = (): number => {
        return this.balance;
    }

    printBalance = (): void => {
        console.log(this.balance);
    }

    private validadeStatus = (): Boolean => {
        if(this.status) {
            return this.status;
        }
        throw new Error('Invalid Account!');
    }
}