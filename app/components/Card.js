import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ id,title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
        <Text style={styles.id}>{id}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} >
            {subTitle}
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
  subTitle: {
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
