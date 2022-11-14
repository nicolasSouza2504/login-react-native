import React from "react";
import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10

    },
    label: {
        fontWeight: 'bold',
        color: "#423d3d",
        fontSize: 18,
        fontFamily: 'sans-serif',
        paddingLeft: 20
    },
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ebe8e8",
        alignItems: "center",
        marginTop: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30        
    },
    input: {
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    button: {
        alignItems: "center",
        width: "45%",
        height: "5%",
        borderRadius: 50,
        backgroundColor: 'white'
    },
    textButton: {
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 7
    },
    general: {
        backgroundColor: '#2e2d2d'
    },
    errorResult: {
        margin: 35,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#ff8f8f"
    },
    successResult: {
        margin: 35,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#7dff81"
    }

});

export default style;

