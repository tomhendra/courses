let myAccount = {
    name: 'Tom Hendra',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// Challenge area
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addExpense(myAccount, 2.50)
console.log(myAccount)

addExpense(myAccount, 14.75)
console.log(myAccount)

addIncome(myAccount, 1000)
console.log(myAccount)

console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(myAccount)
