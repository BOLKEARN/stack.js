class Stack {
    constructor() {
        this.array = []
    }

    empty() {
        return this.array.length == 0
    }

    push(e) {
        this.array.unshift(e)
    }
}


module.exports = Stack