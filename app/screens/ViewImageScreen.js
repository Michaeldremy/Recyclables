import React from "react";
import { Image, StyleSheet, View } from "react-native";

import color from '../config/color';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.clothesIcon}></View>
      <View style={styles.deleteIcon}></View>
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
    width: 50,
    height: 50,
    backgroundColor: color.primary,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
    position: 'absolute',
    top: 30,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: color.black
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
