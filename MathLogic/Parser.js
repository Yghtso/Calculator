import { TokenType } from "./Tokenizer";

export function parse(tokenizedExpr) {
  if (!Array.isArray(tokenizedExpr) || tokenizedExpr.length === 0) {
    return 0;
  }

  let previousToken = null;
  let parenthesesBalance = 0;

  for (const token of tokenizedExpr) {
    const { type, value } = token;

    // Check for two operators in a row
    if (type === TokenType.OPERATOR) {
      if (!previousToken || previousToken.type === TokenType.OPERATOR || previousToken.type === TokenType.LPAREN) {
        throw new Error(`Unexpected operator "${value}" after "${previousToken ? previousToken.value : 'nothing'}"`);
      }
    }

    // Check for number immediately after another number or right after a closing parenthesis
    if (type === TokenType.NUMBER) {
      if (previousToken && (previousToken.type === TokenType.NUMBER || previousToken.type === TokenType.RPAREN)) {
        throw new Error(`Unexpected number "${value}" after "${previousToken.value}"`);
      }
    }

    // Check parentheses balance
    if (type === TokenType.LPAREN) {
      parenthesesBalance++;
      if (previousToken && (previousToken.type === TokenType.NUMBER || previousToken.type === TokenType.RPAREN)) {
        throw new Error(`Unexpected "(" after "${previousToken.value}"`);
      }
    } else if (type === TokenType.RPAREN) {
      parenthesesBalance--;
      if (parenthesesBalance < 0) {
        throw new Error('Too many closing parentheses ")"');
      }
      if (previousToken && previousToken.type === TokenType.OPERATOR) {
        throw new Error(`Unexpected ")" after operator "${previousToken.value}"`);
      }
    }

    previousToken = token;
  }

  // After going through everything, parentheses must be balanced
  if (parenthesesBalance !== 0) {
    throw new Error('Unbalanced parentheses');
  }

  // Final check: expression cannot end with an operator
  if (previousToken.type === TokenType.OPERATOR) {
    throw new Error(`Expression cannot end with operator "${previousToken.value}"`);
  }
}