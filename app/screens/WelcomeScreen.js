import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";

import routes from '../navigation/routes'
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={5}
      source={require("../assets/WSBackground.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Text style={styles.catchPhrase}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" colors="secondary" onPress={() => navigation.navigate(routes.REGISTER)}/>
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
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
