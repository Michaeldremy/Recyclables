import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import color from "../config/color";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
