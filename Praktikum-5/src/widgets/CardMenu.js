import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CardMenu = () => {
    const menuList = [
        { id: 1, name: "Attendance", icon: "calendar-check" },
        { id: 2, name: "Hot Line", icon: "headset" },
        { id: 3, name: "Actifity", icon: "chart-line" },
        { id: 4, name: "PCF", icon: "edit" },
        { id: 5, name: "Counselor", icon: "comments" },
        { id: 6, name: "Others", icon: "ellipsis-h" },
    ];
    return (
        <View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {menuList.map((v, index) => (
                    <MenuItem item={v} key={index} />
                ))}
            </View>
        </View>
    );
};

export default CardMenu;

const MenuItem = ({ item }) => {
    return (
        <View style={styles.card_item}>
            <View style={styles.card_item}>
                <FontAwesome5 name={item.icon} size={35} color={"purple"} />
            </View>
            <Text style={styles.card_text}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card_item: {
        width: 100, marginHorizontal: 5, marginVertical: 10, flexDirection: "column",
        justifyContent: "center", alignItems: "center"
    },
    card_icon: { marginBottom: 10 },
    card_text: { color: "purple", fontSize: 14 }
});