import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignInBasic = ({ navigation }) => {

    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState("");

    const [getEmailValue, setEmailValue] = useState("");
    const [getPasswordValue, setPasswordValue] = useState("");

    const handlerValidEmail = (value) => {
        if (value) {
            setEmailValue(value);
            // let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            // if ((value).match(regEmail)) {
            //     setValidEmail("");
            // } else {
            //     setValidEmail("Invalid Email Address");
            // }
            setValidEmail("");
        } else {
            setEmailValue("");
            setValidEmail("This field is required");
        }
        return value;
    }

    const [isOpenPass, setOpenPass] = useState(true);
    const handlerOpenPassword = () => {
        switch (!isOpenPass) {
            case true:
                setOpenPass(true);
                break;
            default:
                setOpenPass(false);
                break;
        }
    }

    const [validPasswordChars, setValidPasswordChars] = useState("");
    const handlerValidPasswordChars = (passwordValue) => {
        let regLetters = /[a-zA-Z]/;
        let regNumbers = /[0-9]/;
        let regSymbols = /[$-/:-?{-~!"^_`\[\]]/
        if (passwordValue.length >= 3) {
            if ((passwordValue).match(regLetters) && (passwordValue).match(regNumbers) && (passwordValue).match(regSymbols)) {
                setPasswordValue(passwordValue);
                setValidPasswordChars("");
            } else {
                setValidPasswordChars("Value must contain alphabet, number and symbol");
            }
        }
        else {
            setValidPasswordChars("Type Minimum 3 Characters");
        }
    }

    const handlerSignIn = () => {
        if ((getEmailValue === "212310016@student.ibik.ac.id") && (getPasswordValue === "BESTstudent_2023")) {
            navigation.navigate("Page1");
        } else {
            Alert.alert('Warning!', 'Email/Password is not match', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.frm_row}>
                <Text style={styles.text_label}>Email </Text>
                <TextInput
                    placeholder="npm@student.ibik.ac.id"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.text_input}
                    defaultValue={email}
                    onChangeText={(text) => handlerValidEmail(text)}
                />
                <Text style={{ color: "red" }}>{validEmail}</Text>
            </View>
            <View style={styles.frm_row}>
                <Text style={styles.text_label}>Password</Text>
                <View
                    style={{
                        ...styles.text_input,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <TextInput
                        secureTextEntry={isOpenPass}
                        placeholder="Enter your password"
                        autoCorrect={false}
                        style={{ ...styles.text_input, borderWidth: 0, padding: 0, width: "90%" }}
                        defaultValue={password}
                        onChangeText={(text) => handlerValidPasswordChars(text)}
                    />
                    <Pressable onPress={() => handlerOpenPassword()}>
                        <FontAwesome5 name={(isOpenPass) ? "eye" : "eye-slash"} size={25} color="purple" />
                    </Pressable>
                </View>
                <Text style={{ color: "red" }}>{validPasswordChars}</Text>
            </View>
            <TouchableOpacity style={styles.btn_signin} onPress={() => handlerSignIn()} >
                <Text style={styles.btn_signin_text}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInBasic;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        marginTop: "auto"
    },
    frm_row: { marginBottom: 15 },
    text_label: {
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 16,
    },
    text_input: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: "purple",
    },
    btn_signin: {
        backgroundColor: "purple",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 15
    },
    btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 }
});