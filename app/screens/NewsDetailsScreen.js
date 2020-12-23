import React from "react";
import { View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function NewsDetailsScreen({ route }) {
  const listing = route.params;

  return (

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
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  body: {
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
  image: {
    width: "100%",
    height: 300,
  },
});

export default NewsDetailsScreen;
