import Account from "../src/account.js";
import StatementPrinter from "../src/statementPrinter.js";
import Transaction from "../src/transaction.js";

describe("Account", () => {
    let account;

    beforeEach(() => {
        account = new Account();
    });

    it("should have an initial balance of 0", () => {
        expect(account.balance).toEqual(0);
    });

    it("should add a transaction to the transactions array", () => {
        const transaction = new Transaction(1000, "credit");
        transaction.deposit(account);
        expect(account.transactions.length).toEqual(1);
        expect(account.transactions[0].amount).toEqual(1000);
    });

    it("should update the balance after adding a transaction", () => {
        const transaction = new Transaction(1000, "credit");
        transaction.deposit(account);
        expect(account.balance).toEqual(1000);
    });
});

describe("Transaction", () => {
    let transaction;
    let account;

    beforeEach(() => {
        account = new Account();
        transaction = new Transaction(1000, "credit");
    });

    it("should add a deposit transaction to the account", () => {
        transaction.deposit(account);
        expect(account.transactions.length).toEqual(1);
        expect(account.transactions[0].amount).toEqual(1000);
    });

    it("should add a withdrawal transaction to the account", () => {
        transaction = new Transaction(500, "debit");
        transaction.withdraw(account);
        expect(account.transactions.length).toEqual(1);
        expect(account.transactions[0].amount).toEqual(500);
    });
});

describe("StatementPrinter", () => {
    let statementPrinter;
    let account;

    beforeEach(() => {
        account = new Account();
        const transaction3 = new Transaction(500, "debit", new Date(2012, 0, 14));
        transaction3.withdraw(account);
        const transaction2 = new Transaction(2000, "credit", new Date(2012, 0, 13));
        transaction2.deposit(account);
        const transaction1 = new Transaction(1000, "credit", new Date(2012, 0, 10));
        transaction1.deposit(account);
        statementPrinter = new StatementPrinter();
    });

    it("should print a statement for the account", () => {
        spyOn(console, "log");
        statementPrinter.printStatement(account);
        expect(console.log).toHaveBeenCalledWith("date        || credit     || debit     || balance");
        expect(console.log).toHaveBeenCalledWith("10/01/2012  ||    1000.00 ||           || 1000.00");
        expect(console.log).toHaveBeenCalledWith("13/01/2012  ||    2000.00 ||           || 3000.00");
        expect(console.log).toHaveBeenCalledWith("14/01/2012  ||            ||    500.00 || 2500.00");
    });
});


