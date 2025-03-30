import { StyleSheet, View } from "react-native";
import CalculatorButton from "./CalculatorButton";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default CalculatorKeyboard = () => {
    return (
        <View style={styles.keyboard}>
            <View style={styles.row}>
                <CalculatorButton char={'C'} />
                <CalculatorButton char={'⌫'} />
                <CalculatorButton char={'%'} />
                <CalculatorButton char={'/'} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'7'} />
                <CalculatorButton char={'8'} />
                <CalculatorButton char={'9'} />
                <CalculatorButton char={'*'} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'4'} />
                <CalculatorButton char={'5'} />
                <CalculatorButton char={'6'} />
                <CalculatorButton char={'+'} />
            </View>
            <View style={styles.row}>
                <CalculatorButton char={'1'} />
                <CalculatorButton char={'2'} />
                <CalculatorButton char={'3'} />
                <CalculatorButton char={'-'} />
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
        height: "70%",
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5,
    },
});