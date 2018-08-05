class View {

    constructor(element) {
        this._element = element;
    }

    template(model) {
        throw new Error("template method must be implemented");
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

}