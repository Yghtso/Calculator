import React, { useRef, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default CalculatorDisplay = ({ inputText , resultText}) => {

    const scrollViewRefExpr = useRef(null);
    const scrollViewRefRes = useRef(null);

    useEffect(() => {
        if (scrollViewRefExpr.current && scrollViewRefRes.current) {
            scrollViewRefExpr.current.scrollToEnd({ animated: true });
            scrollViewRefRes.current.scrollToEnd({ animated: true });
        }
    }, [inputText]);


    return (
        <View style={styles.displayContainer}>
            <ScrollView
                ref={scrollViewRefExpr}
                style={{flex : 3}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.expressionText}>{inputText}</Text>
            </ScrollView>
            <ScrollView
                ref={scrollViewRefRes}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                style={{flex : 1}}
            >
                <Text style={styles.resultText}>{resultText}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    displayContainer: {
        height: "30%",
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    expressionText: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    resultText: {
        fontSize: 30,
        color: 'gray',
        fontWeight: 'bold',
    },
});
