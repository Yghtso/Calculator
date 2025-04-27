import { memo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorKeyboard from './components/CalculatorKeyboard';
import CalculatorDisplay from './components/CalculatorDisplay';
import { StatusBar } from 'react-native';
import toPostFixNotation from './MathLogic/Shunting-Yard';
import calculatePostFix from './MathLogic/PostFixSolver';

import { tokenize } from './MathLogic/Tokenizer';
import { parse } from './MathLogic/Parser';

export default App = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const solveExpr = (expr) => {

    let tokenizedExpr;

    try {
      tokenizedExpr = tokenize(expr);
    } catch (syntaxError) {
      return syntaxError.message;
    }
    
    try {
      parse(tokenizedExpr);
    } catch (semanticError) {
      return semanticError.message;
    }

    const postFixExpr = toPostFixNotation(tokenizedExpr);
    const result = calculatePostFix(postFixExpr);
    return result;
  }

  const [memory, setMemory] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorDisplay inputText={inputText} resultText={resultText} />
      <CalculatorKeyboard inputText={inputText} setInputText={setInputText} resultText={resultText} setResultText={setResultText} solveExpr={solveExpr} memory={memory} setMemory={setMemory} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
