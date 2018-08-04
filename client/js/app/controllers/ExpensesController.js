class ExpensesController {

    constructor() {
        
        // Using bind to simplify DOM manipulation
        let $ = document.querySelector.bind(document);
        
        // Getting form data
        this._inputDate = $('#date');
        this._inputDescription = $('#description');
        this._inputPrice = $('#amount');
        this._expensesList = new ExpensesList();
    }

    add(event) {

        // Prevent page from reloading
        event.preventDefault();

        

        // Insert the new expense into the expenses list
        this._expensesList.addExpense(this._createExpense());

        console.log(this._expensesList.expenses);
        
        this._clearForm();
        
    }

    // Underline used to indicate that this method is "private"
    _createExpense() {
        return new Expense(
        
            // Convert the date from string to a Date object
            DateHelper.stringToDate(this._inputDate.value),
            this._inputDescription.value,
            this._inputPrice.value

        );
    }

    // Underline used to indicate that this method is "private"
    _clearForm() {
        
        this._inputDate.value = '';
        this._inputDescription.value = '';
        this._inputPrice.value = 0;
        this._inputDate.focus();

    }
    
}