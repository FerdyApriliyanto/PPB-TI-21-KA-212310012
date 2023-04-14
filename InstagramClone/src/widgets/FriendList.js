import React from "react";
import { UserObj } from "../Constdata";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const Friend = ({ item }) => {
    return (
        <View style={style.friendContainer}>
            <View style={style.friendInfoContainer}>
                <View>
                    <Image style={style.friendImg} source={(item.gender === "M") ? require('../../assets/male-profile.jpg') : require('../../assets/female-profile.jpg')} />
                </View>
                <View style={style.friendName}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <Text>{item.fullname}</Text>
                </View>
            </View>
            <View>
                <Button style={style.friendBtn} title="Follow" color="purple" />
            </View>
        </View>
    )
}

const FriendItem = () => {
    return (
        <View>
            {UserObj.map((v, index) => (
                <Friend item={v} key={index} />
            ))}
        </View>
    );
};

export default FriendItem;

const style = StyleSheet.create({
    friendContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        marginVertical: 8
    },
    friendInfoContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    friendImg: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    friendName: {
        marginLeft: 15
    }
})