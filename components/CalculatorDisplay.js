import { Text, StyleSheet, View, TextInput } from "react-native";

export default CalculatorDisplay = ({ inputText, resultText }) => {

    return (
        <View style={styles.displayContainer}>
            <Text style={styles.expressionText}>{inputText}</Text>
            <Text style={styles.resultText}>{resultText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    displayContainer: {
        height: "40%",
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    expressionText: {
        fontSize: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    resultText: {
        fontSize: 24,
        color: '#aaa',
        marginBottom: 10,
    },
});