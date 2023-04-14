import { SafeAreaView, View, Platform } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import Header from './widgets/Header';
import { ScrollView } from 'react-native';
import Story from './widgets/Story';
import Feed from './widgets/Feed';

export class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: (Platform.OS === "ios") ? "black" : "white" }}>
                <StatusBar hidden={true} style={"light"} />
                <Header />
                <View style={{ flex: 10, backgroundColor: "white" }}>
                    <ScrollView style={{ flex: 1 }}>
                        <Story />
                        <Feed />
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home;