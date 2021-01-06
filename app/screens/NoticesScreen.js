import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Text from "../components/Text";

function NoticesScreen({ navigation }) {
  let [apiData, setApiData] = useState("");
  let [eventData, setEventData] = useState("");

  fetch("https://adminbeta.amu.ac.in/api/v1/recent-notice?lang=en&page=1")
    .then((response) => response.json())
    .then((data) => setApiData(data.data))
    .catch((err) => console.log(err));

  fetch("https://api.amu.ac.in/api/v1/home-events?lang=en")
    .then((response) => response.json())
    .then((data) => setEventData(data))
    .catch((err) => console.log(err));

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>NOTICES / EVENTS</Text>
      <FlatList
        data={apiData.data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.created_at}
            onPress={() => navigation.navigate(routes.NOTICES, item)}
          />
        )}
      />
      <FlatList
        data={eventData.data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            onPress={() => navigation.navigate(routes.NOTICES, item)}
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

export default NoticesScreen;
