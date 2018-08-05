class ExpensesList {

    constructor() {

        this._expenses = [];

    }

    addExpense(expense) {
        this._expenses.push(expense);
    }

    get expenses() {

        // Returning a copy of the expenses list, to avoid modifications from external sources
        return [].concat(this._expenses);
        
    }

    totalExpenses() {
        // Returning the sum of expenses
        // Multiplying cost per 1 to force integer type
        return this._expenses.reduce((total, n) => total + (n.cost * 1), 0.0);
    }
}