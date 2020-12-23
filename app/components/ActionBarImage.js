import React from 'react';

import {View, StyleSheet, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.logo} source={require("../assets/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    logo: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      marginLeft: 15,
      borderColor:'white',

  
           // borderRadius: 1000/2,
      },   
}) 
export default ActionBarImage;