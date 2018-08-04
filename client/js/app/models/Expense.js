class Expense {

    constructor(date, description, price) {
        
        this._date = new Date(date.getTime());
        this._description = description;
        this._price = price;

        // Freeze the instance to avoid changing after creation.
        Object.freeze(this);
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get description() {
        return this._description;
    }

    get price() {
        return this._price;
    }

}