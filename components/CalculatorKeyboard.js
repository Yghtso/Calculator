import { StyleSheet, View } from "react-native";
import CalculatorButton from "./CalculatorButton";

export default CalculatorKeyboard = ({ inputText, setInputText, computeFunc }) => {

    const handleButtonPress = (char) => {

        switch (char) {

            case "C":
                setInputText("");
                break;

            case "⌫":
                setInputText(prevText.slice(0, -1));
                break;

            case "=":
                break;

            default:
                setInputText(inputText + char);
                break;
        }


    };

    return (
        <View style={styles.keyboard}>
            <View style={styles.row}>
                <CalculatorButton char={'.'} backgroundcolor="white" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'⌫'} backgroundcolor="#ffffff" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'C'} backgroundcolor="#ffffff" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'/'} backgroundcolor="orange" textcolor="#000000" onPress={handleButtonPress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'7'} onPress={handleButtonPress} />
                <CalculatorButton char={'8'} onPress={handleButtonPress} />
                <CalculatorButton char={'9'} onPress={handleButtonPress} />
                <CalculatorButton char={'*'} backgroundcolor="orange" textcolor="#000000" onPress={handleButtonPress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'4'} onPress={handleButtonPress} />
                <CalculatorButton char={'5'} onPress={handleButtonPress} />
                <CalculatorButton char={'6'} onPress={handleButtonPress} />
                <CalculatorButton char={'+'} backgroundcolor="orange" textcolor="#000000" onPress={handleButtonPress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'1'} onPress={handleButtonPress} />
                <CalculatorButton char={'2'} onPress={handleButtonPress} />
                <CalculatorButton char={'3'} onPress={handleButtonPress} />
                <CalculatorButton char={'-'} backgroundcolor="orange" textcolor="#000000" onPress={handleButtonPress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'('} onPress={handleButtonPress} />
                <CalculatorButton char={'0'} onPress={handleButtonPress} />
                <CalculatorButton char={')'} onPress={handleButtonPress} />
                <CalculatorButton char={'='} backgroundcolor="#1368fd" textcolor="#000000" onPress={handleButtonPress} />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-evenly',
        padding: 5,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});