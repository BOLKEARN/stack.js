class Stack {
    constructor() {
        this.array = []
    }

    size() {
        return this.array.length
    }
    
    empty() {
        return this.size() == 0
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