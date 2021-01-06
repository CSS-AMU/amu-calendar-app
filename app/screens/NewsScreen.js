import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Text from "../components/Text";

function NewsScreen({ navigation }) {
  let [apiData, setApiData] = useState("");

  fetch("https://api.amu.ac.in/api/v1/amu-news?lang=en&year=2021")
    .then((response) => response.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>AMU NEWS</Text>
      <FlatList
        data={apiData.data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            onPress={() => navigation.navigate(routes.NEWS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    textDecorationColor: "maroon",
    marginBottom: 20,
    fontSize: 20,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default NewsScreen;
