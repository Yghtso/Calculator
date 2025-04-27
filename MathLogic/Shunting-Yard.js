import { TokenType } from "./Tokenizer";

export default function toPostFixNotation(tokens) {
  const outputQueue = [];
  const opStack = [];

  const prec = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const assoc = { '+': 'left', '-': 'left', '*': 'left', '/': 'left' };

  for (const token of tokens) {
    const { type, value } = token;

    if (type === TokenType.NUMBER) {
      outputQueue.push(token);

    } else if (type === TokenType.OPERATOR) {
      while (
        opStack.length > 0 &&
        opStack[opStack.length - 1].type === TokenType.OPERATOR
      ) {
        const topOp = opStack[opStack.length - 1].value;
        if (
          (assoc[value] === 'left' && prec[value] <= prec[topOp]) ||
          (assoc[value] === 'right' && prec[value] < prec[topOp])
        ) {
          outputQueue.push(opStack.pop());
        } else {
          break;
        }
      }
      opStack.push(token);

    } else if (type === TokenType.LPAREN) {
      opStack.push(token);

    } else if (type === TokenType.RPAREN) {
      while (
        opStack.length > 0 &&
        opStack[opStack.length - 1].type !== TokenType.LPAREN
      ) {
        outputQueue.push(opStack.pop());
      }
      if (
        opStack.length === 0 ||
        opStack[opStack.length - 1].type !== TokenType.LPAREN
      ) {
        throw new Error("Mismatched parentheses");
      }
      opStack.pop();

    } else {
      throw new Error(`Unknown token type: ${type}`);
    }
  }

  while (opStack.length > 0) {
    const op = opStack.pop();
    if (op.type === TokenType.LPAREN || op.type === TokenType.RPAREN) {
      throw new Error("Mismatched parentheses");
    }
    outputQueue.push(op);
  }

  return outputQueue;
}