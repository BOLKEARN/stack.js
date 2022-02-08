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

    pop() {
        this.array.shift()
    }

    top() {
        return this.array[0]
    }

}


module.exports = Stack