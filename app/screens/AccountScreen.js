import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';


const menuItems=[
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:"pink",
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:"lightblue",
        }
    },
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
            title="Noor Fatima"
            subTitle="nfatima111@myamu.ac.in"
            image={require('../assets/c.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList
                  data={menuItems}
                  keyExtractor={menuItem=>menuItem.title}
                  ItemSeparatorComponent={ListItemSeparatorComponent}
                  renderItem={({item})=>
                  <ListItem
                  title={item.title}
                  IconComponent={
                      <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                  }/>
                  }/>
            </View>
            <ListItem
             title="Log Out"
             IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d"/>
             }/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light,
    }
})

export default AccountScreen;