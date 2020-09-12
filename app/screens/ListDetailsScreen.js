import React from "react";
import { View, StyleSheet, Image, SafeAreaView, Text } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import color from "../config/color";

function ListDetailsScreen(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/MichaelAvatar.jpg")}
            title="Michael Remy"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
  },
  price: {
    fontSize: 20,
    color: color.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListDetailsScreen;
