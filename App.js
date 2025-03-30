import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorKeyboard from './components/CalculatorKeyboard';
import CalculatorDisplay from './components/CalculatorDisplay';
import { StatusBar } from 'react-native';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorDisplay />
      <CalculatorKeyboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
