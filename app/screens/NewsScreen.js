import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Text from "../components/Text"

const listings = [
  {
    id: 1,
    title: "AMU Ranks Second",
    subTitle: "AMU Ranks Second all over India",
  },
  {
    id: 2,
    title: "Centenary Celebrations",
    subTitle: "AMU celebrates 100 Years of its Inception",
  },
  {
    id: 3,
    title: "AMU Alumni Meet",
    subTitle: "AMU organizes Almni Meet",
  },
  {
    id: 4,
    title: "Centenary Celebrations",
    subTitle: "AMU celebrates 100 Years of its Inception",
  },
  {
    id: 5,
    title: "Centenary Celebrations",
    subTitle: "AMU celebrates 100 Years of its Inception",
  },
  {
    id: 6,
    title: "Centenary Celebrations",
    subTitle: "AMU celebrates 100 Years of its Inception",
  },
];

function NewsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
            <Text style={styles.text}>AMU NEWS</Text>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.id+". "+item.title}
            subTitle={item.subTitle}
            onPress={() => navigation.navigate(routes.NEWS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign:"center",
    fontWeight:"bold",
    textDecorationColor:"maroon",
    marginBottom:20,
    fontSize:20
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default NewsScreen;
