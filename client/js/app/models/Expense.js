class Expense {

    constructor(date, description, cost) {
        
        this._date = new Date(date.getTime());
        this._description = description;
        this._cost = cost;

        // Freeze the instance to avoid changing after creation.
        Object.freeze(this);
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get description() {
        return this._description;
    }

    get cost() {
        return this._cost;
    }

}