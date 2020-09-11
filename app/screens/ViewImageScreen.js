import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.clothesIcon}>
        <MaterialCommunityIcons 
        name="close" 
        size={35} 
        color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/ChairBackground.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  clothesIcon: {
    position: "absolute",
    top: 30,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
