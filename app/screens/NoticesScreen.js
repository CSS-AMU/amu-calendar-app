import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
<<<<<<< HEAD
import Text from "../components/Text"
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc

const listings = [
  {
    id: 1,
    title: "AMU Alumni Meet",
<<<<<<< HEAD
    subTitle: "AMU organizes Almni Meet",
=======
    body: "AMU organizes Almni Meet",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 2,
    title: "Centenary Celebrations",
<<<<<<< HEAD
    subTitle: "AMU celebrates 100 Years of its Inception",
=======
    body: "AMU celebrates 100 Years of its Inception",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 3,
    title: "AMU Alumni Meet",
<<<<<<< HEAD
    subTitle: "AMU organizes Almni Meet",
=======
    body: "AMU organizes Almni Meet",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 4,
    title: "Centenary Celebrations",
<<<<<<< HEAD
    subTitle: "AMU celebrates 100 Years of its Inception",
=======
    body: "AMU celebrates 100 Years of its Inception",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 5,
    title: "Centenary Celebrations",
<<<<<<< HEAD
    subTitle: "AMU celebrates 100 Years of its Inception",
=======
    body: "AMU celebrates 100 Years of its Inception",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 6,
    title: "Centenary Celebrations",
<<<<<<< HEAD
    subTitle: "AMU celebrates 100 Years of its Inception",
=======
    body: "AMU celebrates 100 Years of its Inception",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
];

function NoticesScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
<<<<<<< HEAD
                  <Text style={styles.text}>NOTICES / EVENTS</Text>
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
              title={item.id+". "+item.title}
<<<<<<< HEAD
            subTitle={item.subTitle}
=======
            body={item.body}
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
            onPress={() => navigation.navigate(routes.NOTICES, item)}
          />
        )}
      />
    </Screen>
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

export default NoticesScreen;
