class StatementPrinter {
    printStatement(account) {
        console.log("date        || credit     || debit     || balance");
        let balance = 0;
        for (let i = account.transactions.length - 1; i >= 0; i--) {
            const transaction = account.transactions[i];
            if (transaction.type === "credit") {
                balance += transaction.amount;
                console.log(
                    `${transaction.date.toLocaleDateString()}  || ${transaction.amount.toFixed(2).padStart(10)} ||           || ${balance.toFixed(2).padStart(7)}`
                );
            } else if (transaction.type === "debit") {
                balance -= transaction.amount;
                console.log(
                    `${transaction.date.toLocaleDateString()}  ||            ||   ${transaction.amount.toFixed(2).padStart(7)} || ${balance.toFixed(2).padStart(7)}`
                );
            }
        }
    }
}

export default StatementPrinter;


