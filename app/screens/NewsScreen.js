<<<<<<< HEAD
import React from "react";
import { FlatList, StyleSheet } from "react-native";

=======
import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
<<<<<<< HEAD
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
=======
import Button from "../components/Button";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function NewsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
    <ActivityIndicator visible={getListingsApi.loading} />
    <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the News.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
          <Card
            title={item.id+". "+item.title}
            body={item.body}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.NEWS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
          />
        )}
      />
    </Screen>
<<<<<<< HEAD
=======
    </>
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  text:{
    textAlign:"center",
    fontWeight:"bold",
    textDecorationColor:"maroon",
    marginBottom:20,
    fontSize:20
  },
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default NewsScreen;
