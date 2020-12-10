import React from 'react';
import {StyleSheet, Text, TouchableHighlight } from 'react-native';

import colors from '../config/colors'

function AppButton({title, onPress, color="primary"}) {
    return (
        <TouchableHighlight style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
       // padding:'15',
        width:'100%',
        height:50,
        marginVertical:10,
        borderColor:'grey',
        borderWidth:1,
       
        
    },
    text:{
        color:'white',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'bold',
        textShadowColor:'maroon',
       textShadowRadius:5,
       letterSpacing:1,
       fontFamily: 'Roboto'
    }
})

export default AppButton;