import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function HolidaysDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
<<<<<<< HEAD
        <Text style={styles.subTitle}>{listing.subTitle}</Text>
=======
        <Text style={styles.body}>{listing.body}</Text>
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
        <View style={styles.userContainer}>
          <ListItem
            //image={require("../assets/c.jpg")}
            title="Controller Office"
<<<<<<< HEAD
            subTitle="5 Listings"
=======
            body="5 Listings"
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
<<<<<<< HEAD
  subTitle: {
=======
  body: {
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default HolidaysDetailsScreen;
