import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorKeyboard from './components/CalculatorKeyboard';
import CalculatorDisplay from './components/CalculatorDisplay';
import { StatusBar } from 'react-native';

export default App = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  function computeExpr(inputText) {
    setResultText(inputText);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorDisplay inputText={inputText} resultText={resultText} />
      <CalculatorKeyboard inputText={inputText} setInputText={setInputText} computeFunc={computeExpr} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
