import { View, StyleSheet, Text } from "react-native";

export default CalculatorButton = ({ char, backgroundcolor = "#393939", textcolor = "#ffffff" }) => {
    return (
        <View style={[styles.button, { backgroundColor: backgroundcolor }]}>
            <Text style={[styles.buttonchar, { color: textcolor }]}>{char}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonchar: {
        fontSize: 29,
    },

    button: {
        flex: 1,
        margin: 5,
        aspectRatio: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});