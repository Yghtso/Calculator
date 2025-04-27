import { StyleSheet, View } from "react-native";
import CalculatorButton from "./CalculatorButton";

export default CalculatorKeyboard = ({ inputText, setInputText, resultText, setResultText, solveExpr, memory, setMemory }) => {

    const handleButtonPress = (char) => {

        let newExpr = inputText;
        let newResult = resultText;

        switch (char) {

            case "C":
                newExpr = '';
                newResult = '';
                break;

            case "⌫":
                newExpr = inputText.slice(0, -1);
                newResult = solveExpr(newExpr).toString();
                break;

            case "=":
                newResult = solveExpr(inputText).toString();
                newExpr = newResult;
                break;

            case "M+":
                setMemory(memory + solveExpr(inputText));
                break;

            case "M-":
                setMemory(memory - solveExpr(inputText));
                break;

            case "RM":
                newExpr = memory.toString();
                newResult = memory.toString();
                break;

            case "MC":
                setMemory(0);
                break;

            default:
                newExpr = inputText + char;
                newResult = solveExpr(newExpr).toString();
                break;
        }

        setInputText(newExpr);
        setResultText(newResult);
    };


    return (
        <View style={styles.keyboard}>
            <View style={styles.row}>
                <CalculatorButton char={'M+'} backgroundcolor="#02bf08" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'M-'} backgroundcolor="#02bf08" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'RM'} backgroundcolor="#02bf08" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'MC'} backgroundcolor="#02bf08" textcolor="#000000" onPress={handleButtonPress} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'.'} backgroundcolor="white" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'⌫'} backgroundcolor="white" textcolor="#000000" onPress={handleButtonPress} />
                <CalculatorButton char={'C'} backgroundcolor="white" textcolor="#000000" onPress={handleButtonPress} />
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
    );
}

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