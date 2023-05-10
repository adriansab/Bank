class Transaction {
    constructor(amount, type, date) {
        this.amount = amount;
        this.type = type;
        this.date = date;
    }

    deposit(account) {
        account.addTransaction(new Transaction(this.amount, "credit", this.date));
    }

    withdraw(account) {
        account.addTransaction(new Transaction(this.amount, "debit", this.date));
    }
}

export default Transaction;
