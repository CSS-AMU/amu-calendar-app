import React from "react";
import {
  View,
  StyleSheet,
<<<<<<< HEAD
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ id,title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
=======
  TouchableWithoutFeedback,
} from "react-native";

import { Image } from "react-native-expo-image-cache";
import Text from "./Text";
import colors from "../config/colors";

function Card({ id,title, body, imageUrl, onPress, thumbnailUrl  }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
      <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
        <View style={styles.detailsContainer}>
        <Text style={styles.id}>{id}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
<<<<<<< HEAD
          <Text style={styles.subTitle} >
            {subTitle}
=======
          <Text style={styles.body} >
            {body}
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor:'maroon',
    borderLeftWidth:3,
    borderRightWidth:3,
    borderBottomWidth:3,
    borderTopWidth:3,
    marginBottom: 17,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 9,
  },
  image: {
    width: "100%",
    height: 200,
  },
<<<<<<< HEAD
  subTitle: {
=======
  body: {
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
    color: colors.medium,
    fontWeight: "600",
    marginBottom: 7,
  },
  title: {
    marginBottom: 7,
    fontWeight:'bold',
    color: colors.secondary,
  },
});

export default Card;
