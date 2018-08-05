class ExpensesView extends View {

    template(expensesList) {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Cost</th>
                </tr>
            </thead>
            
            <tbody>
                ${expensesList.expenses.map(n => `

                    <tr>
                        <td>${DateHelper.dateToString(n.date)}</td>
                        <td>${n.description}</td>
                        <td>${n.cost}</td>
                    </tr>

                `).join('')}
            </tbody>
                
            <tfoot>
                <td colspan='2' class="text-right"><strong>Total:</strong></td>
                <td>${expensesList.totalExpenses()}</td>
            </tfoot>
            </table>
        `
    }

}