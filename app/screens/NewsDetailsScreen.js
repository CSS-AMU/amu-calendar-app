import React from "react";
<<<<<<< HEAD
import { View, Image, StyleSheet } from "react-native";
=======
import { View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,} from "react-native";
import { Image } from "react-native-expo-image-cache";
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
<<<<<<< HEAD
=======
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc

function NewsDetailsScreen({ route }) {
  const listing = route.params;

  return (
<<<<<<< HEAD
    <View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.subTitle}</Text>
        <View style={styles.userContainer}>
          <ListItem
            //image={require("../assets/c.jpg")}
            title="Controller Office"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
=======

<KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.body}>{listing.body}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/amu.jpg")}
            title="Controller Office"
            body="5 Listings"
          />
      </View>
    </View>
    </KeyboardAvoidingView>
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
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
<<<<<<< HEAD
=======
  image: {
    width: "100%",
    height: 300,
  },
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
});

export default NewsDetailsScreen;
