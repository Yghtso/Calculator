function toPostFixNotation(mathExpr) {

    const operators = {
        ')': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1,
        '(': 0,
    };

    const outputQueue = [];
    const operatorStack = [];

    for (const token of mathExpr) {

        if (!isNaN(token)) { outputQueue.push(token); }

        else if (token in operators) {

            while (operatorStack.length && operatorStack.at(-1) !== '(' && operators[token] <= operators[operatorStack.at(-1)]) {
                outputQueue.push(operatorStack.pop());
            }

            operatorStack.push(token);

        }

        else if (token === '.') { outputQueue.push(token) };
    }

    while (operatorStack.length) { outputQueue.push(operatorStack.pop()); }

    return outputQueue;

};

export default toPostFixNotation;