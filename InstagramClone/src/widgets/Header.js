import { View, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Image style={{ height: 100, width: 100 }} source={require("../../assets/instagram-logo.png")} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name={"heart"} color="black" size={25} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name={"paper-plane"} color="black" size={25} />
        </View>
      </View>
    </View>
  );
};

export default Header;