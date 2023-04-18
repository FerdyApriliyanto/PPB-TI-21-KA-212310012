import { Dimensions, Image, StyleSheet, Text, TextInput, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import React, { Component } from 'react'

export default class FormRCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "IBI Kesatuan",
            subTitle: "Bogor Indonesia"
        }
    }

    render() {
        return (
            <SafeAreaView style={style.safeView}>
                <View style={style.header}>
                    <Image style={style.logo} source={require('../assets/logo-ibik.png')} />
                    <View>
                        <Text style={style.title}>{this.state.title}</Text>
                        <Text style={style.subTitle}>{this.state.subTitle}</Text>
                    </View>
                </View>
                <View style={style.inputFormContainer}>
                    <View style={style.changeLogoContainer}>
                        <Text style={style.changeLogo}>Change Logo</Text>
                    </View>
                    <View>
                        <Text style={style.inputTitleText}>Title</Text>
                        <TextInput style={style.inputTitle}
                            placeholder='Enter title here'
                            defaultValue={this.state.title}
                            onChangeText={(text) => this.setState({ title: text })} />
                    </View>
                    <View>
                        <Text style={style.inputSubTitleText}>Sub Title</Text>
                        <TextInput style={style.subTitleInput}
                            placeholder='Enter sub title here'
                            defaultValue={this.state.subTitle}
                            onChangeText={(text) => this.setState({ subTitle: text })} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    safeView: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    title: {
        fontWeight: "bold",
        color: "purple",
        fontSize: 20
    },
    subTitle: {
        color: "purple",
        fontSize: 12
    },
    logo: {
        width: 42,
        height: 42,
        resizeMode: "contain"
    },
    changeLogo: {
        fontWeight: "bold",
        fontSize: 22
    },
    changeLogoContainer: {
        marginTop: 30
    },
    inputFormContainer: {
        paddingHorizontal: 10
    },
    inputTitleText: {
        marginVertical: 4
    },
    inputSubTitleText: {
        marginVertical: 4
    },
    inputTitle: {
        borderBottomWidth: 1
    },
    subTitleInput: {
        borderBottomWidth: 1
    }
})