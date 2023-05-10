class Account {
    #balance = 0;
    transactions = [];

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        this.#balance = amount;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
        this.#balance += transaction.amount;
    }
}

export default Account;

