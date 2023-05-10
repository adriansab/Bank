# Domain Modeling

# User Stories


# 1. As a bank client i want to deposit money to my account.

| Objects   | Properties                 | Messages          | Outputs  |
| -------   | -------------------------  | ----------------- | -------  |
| Account   | Balance @Integer           |                   | @Void    |
|           |                            |                   |          |
|Transaction| Amount  @Integer           | deposit(@account) | @Void    |
|           |                            |                   |          |


# 2. As a bank client i want to withdrawal money from my account.

| Objects    | Properties                | Messages          | Outputs |
| -------    | ------------------------- | ----------------- | ------- |
| Account    | Balance @Integer          |                   | @Void   |
|            |                           |                   |         |
|Transaction | Amount @Integer           |Withdraw(@account) | @Void   |
|            |                           |                   |         |



# 3. As a bank client i want to print my bank statement with date, credit or debit amount, balance.

| Objects          | Properties        | Messages                  | Outputs |
| -------          | ------------------| ----------------          | ------- |
| StatementPrinter |                   | printStatement(@account)  | @String |
|                  |                   |                           |         |
|                  |                   |                           |         |
|                  |                   |                           |         |


# 4. As the system designer i want keep data in memory.

| Objects     | Properties                       | Messages                     | Outputs |
| -------     | -------------------------        | -----------------            | ------- |
| Account     | Transactions [@Integer,String@]  | addTransaction(@transaction) | @Void   |
|             |                                  |                              |         |
| Account     | Balance @Integer                 | get balance()                |@Integer |
|             |                                  |                              |         |


