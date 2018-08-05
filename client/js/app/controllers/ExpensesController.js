class ExpensesController {

    constructor() {
        
        // Using bind to simplify DOM manipulation
        let $ = document.querySelector.bind(document);
        
        // Getting form data
        this._inputDate = $('#date');
        this._inputDescription = $('#description');
        this._inputCost = $('#amount');
        this._expensesList = new ExpensesList();
        this._expensesView = new ExpensesView($('#expensesView'));
        this._expensesView.update(this._expensesList);
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
    }

    add(event) {

        // Prevent page from reloading
        event.preventDefault();

        // Insert the new expense into the expenses list
        this._expensesList.addExpense(this._createExpense());

        // Update the expenses view
        this._expensesView.update(this._expensesList);

        // Set the message
        this._message.text = 'Expense Successfully Added';
        // console.log(this._message.text);
        this._messageView.update(this._message);

        // Clear the form
        this._clearForm();
        
    }

    // Underline used to indicate that this method is "private"
    _createExpense() {
        return new Expense(
        
            // Convert the date from string to a Date object
            DateHelper.stringToDate(this._inputDate.value),
            this._inputDescription.value,
            this._inputCost.value

        );
    }

    // Underline used to indicate that this method is "private"
    _clearForm() {
        
        this._inputDate.value = '';
        this._inputDescription.value = '';
        this._inputCost.value = null;
        this._inputDate.focus();

    }
    
}