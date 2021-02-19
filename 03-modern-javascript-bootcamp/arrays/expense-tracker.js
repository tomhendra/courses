const account = {
    name: 'Tom Hendra',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            item: description, 
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            item: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        
        balance = totalIncome - totalExpenses
        return `${this.name} has a balance of €${balance.toFixed(2)}. €${totalIncome.toFixed(2)} in income. €${totalExpenses.toFixed(2)} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Beer', 10)
account.addIncome('Website', 2000)
account.addIncome('Mobile app', 3000)
console.log(account.getAccountSummary())