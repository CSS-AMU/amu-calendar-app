import React from "react";
import {
  View,
  StyleSheet,
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
        <View style={styles.detailsContainer}>
        <Text style={styles.id}>{id}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.body} >
            {body}
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
  body: {
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
