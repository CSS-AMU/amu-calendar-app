import React from 'react';
import { View, StyleSheet , Image, Text} from 'react-native';
import AppText from '../components/AppText';

import ListItem from '../components/ListItem';
import colors from'../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/b.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>The Orange Tree</AppText>
            <AppText style={styles.desc}>Department of Statistics</AppText>
            <View style={styles.userContainer}>
            <ListItem
            image={require("../assets/c.jpg")}
            title="Noor Fatima"
            subTitle="5 Listings"/>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20,
    },
    userContainer:{
        marginVertical:40,
    },
    desc :{ 
        color:colors.secondary,
        fontSize:20,
        fontWeight:'bold',
    },
    image:{
        width:'100%',
        height: '50%',
        top:20,
        marginVertical:5,
    },
    title:{
        fontSize:24,
        color:colors.primary,
        fontWeight:'bold',
    }


});

export default ListingDetailsScreen;