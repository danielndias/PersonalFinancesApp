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
}