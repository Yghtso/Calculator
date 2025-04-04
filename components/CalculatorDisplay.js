import React, { useRef, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default CalculatorDisplay = ({ inputText , resultText}) => {

    const scrollViewRef = useRef(null);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [inputText]);


    return (
        <View style={styles.displayContainer}>
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.expressionText}>{inputText}</Text>
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
    scrollView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    expressionText: {
        fontSize: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
});
