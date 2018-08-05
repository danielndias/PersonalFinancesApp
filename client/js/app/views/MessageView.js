class MessageView extends View {

    template(message) {
        return `<p class="alert alert-success">${message.text}</p>`
    }
}