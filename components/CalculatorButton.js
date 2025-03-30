import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default CalculatorButton = ({ char, backgroundcolor = "#393939", textcolor = "#ffffff", onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(char)} style={[styles.button, { backgroundColor: backgroundcolor }]}>
            <Text style={[styles.buttonchar, { color: textcolor }]}>{char}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonchar: {
        fontSize: 33,
    },

    button: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});