import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings =[
    {
        id:1,
        title:'Department of Computer Science',
        subTitle: "Aligarh Muslim University",
        image: require('../assets/csd.jpg'),
    },
    {
        id:2,
        title:'Department of Physics',
        subTitle: "Aligarh Muslim University",
        image: require('../assets/phy.jpg'),
    },

]
function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
               data={listings}
               keyExtractor={listing=>listing.id.toString()}
               renderItem={({item})=>(
               <Card 
               title={item.title}
               subTitle={item.subTitle}
               image={item.image}
               />
               )}
               />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,

    }
})

export default ListingsScreen;