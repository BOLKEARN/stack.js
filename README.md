# stack.js

stack.js is an simple data structure

## Installation


```bash
npm i @bolkearn/stack.js
```

## Usage

```js
const Stack = require("@bolkearn/stack.js")

let stack = new Stack();

//returns true if stack is empty
stack.empty()

//returns value from stack
stack.top()

//add value to stack
stack.push(1);

//remove value from stack
stack.pop()

//return size of stack
stack.size()
```

## License
ISC