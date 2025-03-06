import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorKeyboard from './components/CalculatorKeyboard';
import CalculatorDisplay from './components/CalculatorDisplay';
import { StatusBar } from 'react-native';

export default App = () => {
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorDisplay inputText={inputText} />
      <CalculatorKeyboard inputText={inputText} setInputText={setInputText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
