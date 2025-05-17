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

    protected _internalCreditOperatio = (amountToCredit: number): void => {
        if (amountToCredit <= 0) {
            throw new Error('The value must be positive');
        }
        this.amount = amountToCredit;
        this.validadeStatus();
        this.balance += this.amount;
    }

    deposit = (amount: number): void => {
        try {
            this._internalCreditOperatio(amount);
            console.log(`You deposited an amount of: $${this.amount}`);
        } catch (error: any) {
            console.error('Failed to complete');
        }
    }

    withdraw = (amount: number): void => {
        if (amount <= 0) {
            console.log('The value must be positive');
            return;
        }
        this.amount = amount;

        if (this.validadeStatus() && this.balance >= this.amount) {
            this.balance -= this.amount;
            console.log(`You made a withdrawl of: $${this.amount}`);
        } else if (this.amount) {
            console.log('Insufficient balance for withdrawl.');
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