import Account from "./src/account.js";
import StatementPrinter from "./src/statementPrinter.js";
import Transaction from "./src/transaction.js";

const account = new Account();

const transaction3 = new Transaction(500, "debit", new Date(2012, 0, 14));
transaction3.withdraw(account);
const transaction2 = new Transaction(2000, "credit", new Date(2012, 0, 13));
transaction2.deposit(account);
const transaction1 = new Transaction(1000, "credit", new Date(2012, 0, 10));
transaction1.deposit(account);

const statementPrinter = new StatementPrinter();
statementPrinter.printStatement(account);