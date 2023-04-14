import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Image style={style.img} source={require('../assets/instagram-logo.png')}></Image>
            <View style={style.inputContainer}>
                <TextInput
                    selectionColor={'grey'}
                    style={style.input}
                    placeholder="Phone number, username or email"></TextInput>
                <TextInput
                    secureTextEntry={true}
                    selectionColor={'grey'}
                    style={style.input}
                    placeholder="Password"></TextInput>
                <Text style={style.forgotPassword}>Forgot password?</Text>
                <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('HomePage', { name: 'Home' })}>
                    <Text style={style.btnText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.orText}>OR</Text>
            <View style={style.facebookLogin}>
                <Image style={style.facebookLogo} source={require("../assets/facebook-logo.png")} />
                <Text style={style.facebookLoginText}>Continue as Dave John</Text>
            </View>
            <View style={style.signUp}>
                <Text>Don't have an account? </Text>
                <Text style={style.signUpText}>Sign Up.</Text>
            </View>
        </View>
    )
}

export default Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 200,
        height: 100
    },
    inputContainer: {
        width: "90%"
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 10,
        marginVertical: 8
    },
    btn: {
        backgroundColor: "#3E54AC",
        padding: 10,
        borderRadius: 10,
        marginTop: 25
    },
    btnText: {
        color: "white",
        textAlign: "center"
    },
    orText: {
        marginTop: 25
    },
    facebookLogin: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    facebookLogo: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    facebookLoginText: {
        color: "#3E54AC",
        fontWeight: "bold"
    },
    signUp: {
        height: "30%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    signUpText: {
        color: "#3E54AC",
        fontWeight: "bold"
    },
    forgotPassword: {
        textAlign: "right",
        color: "#3E54AC",
        fontWeight: "bold"
    }
})