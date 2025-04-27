export const TokenType = Object.freeze({
    NUMBER:   'NUMBER',
    OPERATOR: 'OPERATOR',
    LPAREN:   'LPAREN',
    RPAREN:   'RPAREN',
});
  
export function tokenize(expr) {
    const tokens = [];
    let i = 0;
  
    while (i < expr.length) {
        const char = expr[i];
  
        if (/[0-9.]/.test(char)) {
            let numStr = '';
            let dotCount = 0;
  
            while (i < expr.length && /[0-9.]/.test(expr[i])) {
                
                if (expr[i] === '.') {
                    
                    dotCount++;
                
                    if (dotCount > 1) { throw new Error(`Invalid number: "${numStr + expr[i]}"`); }
                }
                
                numStr += expr[i++];
            }
  
            if (numStr === '.') { throw new Error('Invalid number: lone "."'); }
  
            tokens.push({ value: numStr, type: TokenType.NUMBER });
            continue;
        }
  
        switch (char) {
            case '+':
            case '-':
            case '*':
            case '/':
                
                tokens.push({ value: char, type: TokenType.OPERATOR });
                break;
            
            case '(':
                
                tokens.push({ value: char, type: TokenType.LPAREN });
                break;
        
            case ')':

                tokens.push({ value: char, type: TokenType.RPAREN });
                break;

            default:
                throw new Error(`Unrecognized character: "${char}"`);
        }
  
        i++;
    }
  
    return tokens;
}