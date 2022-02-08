const Stack = require("./stack");

describe('Stack Test', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('new Stack()', () => {
        expect(stack).toBeInstanceOf(Stack)
    });

    it('stack.empty', () => {
        expect(stack.empty()).toBeTruthy();

    });

    it('Stack.top()', () => {
        let r = Math.random();
        stack.push(r);
        expect(stack.top()).toBe(r);
    });

    it('Stack.push()', () => {
        let r = Math.random();
        stack.push(r);
        expect(stack.top()).toBe(r)
    });


    it('Stack.pop()', () => {
        let r = Math.random()
        stack.push(r)
        expect(stack.top()).toBe(r)

        stack.pop()
        expect(stack.empty()).toBeTruthy();
    });


    it("Stack.size()", () => {
        expect(stack.size()).toBe(0);

        stack.push(Math.random());
        expect(stack.size()).toBe(1);

        stack.push(Math.random());
        stack.push(Math.random());
        expect(stack.size()).toBe(3);
    })
    
});