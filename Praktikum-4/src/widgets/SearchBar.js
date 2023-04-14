import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

const SearchBar = (props) => {
    return (
        <View style={style.container}>
            <TextInput
                placeholder="Search"
                selectionColor={'grey'}
                style={style.input}
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
            />
        </View>
    )
}

export default SearchBar;

const style = StyleSheet.create({
    container: {
        margin: 5
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "black",
        borderWidth: 1
    }
})