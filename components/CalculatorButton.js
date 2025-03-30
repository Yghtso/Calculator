import { View, StyleSheet, Text } from "react-native";

export default CalculatorButton = ({ char }) => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonchar}>{char}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonchar: {
        fontSize: 24,
        color: '#ffffff',
    },

    button: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        backgroundColor: '#393939',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});