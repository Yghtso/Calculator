import { TokenType } from "./Tokenizer";

export default function calculatePostFix(postFixExpr) {
    if (!Array.isArray(postFixExpr) || postFixExpr.length === 0) {
        return '';
    }

    const stack = [];

    for (const token of postFixExpr) {
        if (token.type === TokenType.NUMBER) {

            stack.push(parseFloat(token.value));
        } else if (token.type === TokenType.OPERATOR) {
        
        if (stack.length < 2) {
            throw new Error("Insufficient values in expression");
        }
        const b = stack.pop();
        const a = stack.pop();
        let res;

        switch (token.value) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                if (b === 0) throw new Error("Division by zero");
                res = a / b;
                break;
            default:
                throw new Error(`Unknown operator: ${token.value}`);
        }

        stack.push(res);
    
    } else {
        throw new Error(`Unexpected token type in postfix expression: ${token.type}`);
    }
  }

  return stack[0];
}