import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FriendItem from './widgets/FriendList'
import SearchBar from './widgets/SearchBar'
import { ScrollView } from 'react-native-gesture-handler'

const Friend = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <ScrollView>
            <View>
                <SearchBar searchText={searchText} setSearchText={setSearchText}></SearchBar>
                <Text style={style.text}>Reccomended Friends</Text>
                <FriendItem />
                <View style={style.contact}>
                    <Text style={style.text}>Similar Contact</Text>
                    <FriendItem />
                </View>
            </View>
        </ScrollView>
    )
}

export default Friend;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff"
    },
    text: {
        marginHorizontal: 5,
        marginVertical: 5,
        fontWeight: "bold"
    },
    contact: {
        marginTop: 30
    }
})