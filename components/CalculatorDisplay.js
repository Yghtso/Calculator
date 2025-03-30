import { Text, StyleSheet, View, SafeAreaView } from "react-native";

export default CalculatorDisplay = () => {
    return (
        <View style={styles.displayContainer}>
            <Text style={styles.resultText}>RISULTATO</Text>
            <Text style={styles.expressionText}>EXPR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    displayContainer: {
        height: "45%",
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    resultText: {
        fontSize: 48,
        color: '#fff',
        fontWeight: 'bold',
    },
    expressionText: {
        fontSize: 24,
        color: '#aaa',
        marginBottom: 10,
    },
});