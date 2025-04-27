import { TokenType } from "./Tokenizer";

// commentato per ricore le delle regole per la espressione
export function parse(tokenizedExpr) {
  if (!Array.isArray(tokenizedExpr) || tokenizedExpr.length === 0) {
    return 0;
  }

  let previousToken = null;
  let parenthesesBalance = 0;

  for (let i = 0; i < tokenizedExpr.length; i++) {
    const token = tokenizedExpr[i];
    const { type, value } = token;

    // 1) Due operatori di fila, o operatore subito dopo "("
    if (type === TokenType.OPERATOR) {
      if (
        !previousToken ||
        previousToken.type === TokenType.OPERATOR ||
        previousToken.type === TokenType.LPAREN
      ) {
        throw new Error(
          `Unexpected operator "${value}" after "${previousToken ? previousToken.value : 'nothing'}"`
        );
      }

      //2) Controllo divisione per zero
      if (value === "/") {
        const next = tokenizedExpr[i + 1];
        if (
          next &&
          next.type === TokenType.NUMBER &&
          parseFloat(next.value) === 0
        ) {
          throw new Error("Division by zero");
        }
      }
    }

    // 3) Numero subito dopo un altro numero o dopo ")"
    if (type === TokenType.NUMBER) {
      if (
        previousToken &&
        (previousToken.type === TokenType.NUMBER ||
         previousToken.type === TokenType.RPAREN)
      ) {
        throw new Error(`Unexpected number "${value}" after "${previousToken.value}"`);
      }
    }

    // 4) Equilibrio tra parentesi
    if (type === TokenType.LPAREN) {
      parenthesesBalance++;
      if (
        previousToken &&
        (previousToken.type === TokenType.NUMBER ||
         previousToken.type === TokenType.RPAREN)
      ) {
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

  // 5) Controlli semantici finali
  if (parenthesesBalance !== 0) {
    throw new Error('Unbalanced parentheses');
  }
  if (previousToken.type === TokenType.OPERATOR) {
    throw new Error(`Expression cannot end with operator "${previousToken.value}"`);
  }
}