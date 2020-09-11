import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/WSBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Text style={styles.catchPhrase}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 115,
    width: 115,
    position: "absolute",
    top: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  catchPhrase: {
    position: 'absolute',
    top: 135,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
