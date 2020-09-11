import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import color from '../config/color';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={2}
      source={require("../assets/WSBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Text style={styles.catchPhrase}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.signInText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.signInText}>Register</Text>
      </View>
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
    height: 130,
    width: 130,
    position: "absolute",
    top: 5,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  catchPhrase: {
    position: "absolute",
    top: 135,
    fontSize: 25,
    fontWeight: "bold",
  },
  loginButton: {
    width: "90%",
    height: 45,
    backgroundColor: color.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold"
  }, 
  registerButton: {
    width: "90%",
    height: 45,
    backgroundColor: color.secondary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginBottom: 20
  },
});

export default WelcomeScreen;
