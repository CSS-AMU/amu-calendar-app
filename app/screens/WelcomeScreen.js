import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/amu.jpg")} />
        <Text style={styles.tagline}>AMU CALENDAR</Text>
        <Text style={styles.subtag}>{'Your Destination for \nHolidays, Notices, Events & News Updates of \nThe Aligarh Muslim University'}</Text> 
        </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate(routes.APP)}
        />       
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 180,
        height: 180,
        position:'absolute',
        top:40, 
        borderRadius: 1000/2  
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline:{
    color:'white',
    fontSize:40,
   // textShadowColor:'white',
    textShadowRadius:15,
    textDecorationColor:'pink',
    top:390,
    alignSelf:"center",
    textAlign:'center',
    fontWeight:"400",  
    fontFamily: 'serif', 
 },
 subtag:{
     color:'silver',
     fontSize:19,
     textShadowColor:'black',
     textShadowRadius:10,
     top:480,
     alignSelf:"center",
     textAlign:'center',
     fontWeight:"600",
     fontFamily: 'sans-serif-condensed',
     paddingLeft:10,
     paddingRight:10

  }
});

export default WelcomeScreen;
