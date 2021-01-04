import _ from 'lodash';
import React, {Component} from 'react';
import {Platform, Alert, StyleSheet, View, Text, TouchableOpacity, Button, ScrollView,Dimensions,Image, ImageBackground} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';

import colors from '../config/colors';

const testIDs = require('../components/testIDs');

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
const themeColor = 'maroon';
const lightThemeColor = '#EBF9F9';

const { height,width} = Dimensions.get('window');

function getFutureDates(days) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - 864e5 * days).toISOString().split('T')[0];
}

const ITEMS = [
  {title: "26 Jan 2021", data: [{title: 'Republic Day'}]},
  {title: "26 Feb 2021", data: [{title: 'Youm-e-Wiladat Hazrat Ali'}]},
  {title: "11 Mar 2021", data: [{title: ' Maha Shivratri'}]},
  {title: "28 Mar 2021", data: [{title: ' Holi'}]},
  {title: "29 Mar 2021", data: [{title: ' Holi'}]},
  {title: "29 Mar 2021", data: [{title: ' Shab-e-Barat'}]},
  {title: "02 Apr 2021", data: [{title: ' Good Friday'}]},
  {title: "14 Apr 2021", data: [{title: ' Dr. B.R. Ambedkar Jayanti'}]},
  {title: "21 Apr 2021", data: [{title: ' Ram Navami'}]},
  {title: "25 Apr 2021", data: [{title: ' Mahavir Jayanti'}]},
  {title: "07 May 2021", data: [{title: ' Jumatul Wida'}]},
  {title: "13 May 2021", data: [{title: 'Eid-ul-Fitr'}]},
  {title: "14 May 2021", data: [{title: ' Eid-ul-Fitr'}]},
  {title: "26 May 2021", data: [{title: ' Budha Jayanti'}]},
  {title: "21 Jul 2021", data: [{title: ' Eid-ul-Azha'}]},
  {title: "22 Jul 2021", data: [{title: ' Eid-ul-Azha'}]},
  {title: "15 Aug 2021", data: [{title: ' Independence Day'}]},
  {title: "18 Aug 2021", data: [{title: ' Moharram'}]},
  {title: "19 Aug 2021", data: [{title: ' Moharram'}]},
  {title: "22 Aug 2021", data: [{title: ' Raksha Bandhan'}]},
  {title: "30 Aug 2021", data: [{title: ' Janamashtami'}]},
  {title: "29 Sep 2021", data: [{title: ' Chehlum'}]},
  {title: "02 Oct 2021", data: [{title: ' Gandhi Jayanti'}]},
  {title: "15 Oct 2021", data: [{title: ' Dushehra'}]},
  {title: "17 Oct 2021", data: [{title: ' Sir Syed Day'}]},
  {title: "19 Oct 2021", data: [{title: ' Eid-Milad-un-Nabi'}]},
  {title: "04 Nov 2021", data: [{title: ' Deepawali'}]},
  {title: "05 Nov 2021", data: [{title: ' Deepawali'}]},
  {title: "19 Nov 2021", data: [{title: ' Guru Nanak Birthday'}]},
  {title: "25 Dec 2021", data: [{title: ' Christmas'}]},
];

export default class CalendarScreen extends Component {


  onDateChanged = (/* date, updateSource */) => {
    // console.warn('CalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  };

  onMonthChange = ( month, updateSource ) => {
   // console.warn('CalendarScreen onMonthChange: ', month, updateSource);
  };

  
  componentDidMount() {
    let scrollValue = 0;
    setInterval(function(){
      scrollValue = scrollValue + width;   // width = screen width 
      _scrollView.scrollTo({x: scrollValue}) 
    }, 5000);
  }
  

  buttonPressed() {
    Alert.alert('More Info of the Event/ Holiday');
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem() {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({item}) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }

    return (
      <TouchableOpacity onPress={() => this.itemPressed(item.title)} style={styles.item} testID={testIDs.agenda.ITEM}>
        <View>
          <Text style={styles.itemHourText}>{item.hour}</Text>
          <Text style={styles.itemDurationText}>{item.duration}</Text>
        </View>
        <Text style={styles.itemTitleText}>{item.title}</Text>
        <View style={styles.itemButtonContainer}>
          {/*<Button color={'grey'} title={'Info'} onPress={this.buttonPressed} />*/}
        </View>
      </TouchableOpacity>
    );
  };

  getMarkedDates = () => {
    const marked = {};
    ITEMS.forEach(item => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      } else {
        marked[item.title] = {disabled: true};
      }
    });
    return marked;
  };

  getTheme = () => {
    const disabledColor = 'grey';

    return {
      // arrows
      arrowColor: colors.medium,
      //arrowStyle: {padding: 0},
      // month
      monthTextColor: colors.primary,
      //textMonthFontSize: 16,
      //textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: colors.medium,
      todayButtonTextColor:colors.primary,
      //textDayHeaderFontSize: 12,
      //textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // dates
      dayTextColor: colors.secondary,
      //textDayFontSize: 15,
      //textDayFontFamily: 'HelveticaNeue',
      //textDayFontWeight: '500',
      //textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: colors.primary,
      selectedDayTextColor: 'white',
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: 'white',
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2},
    };
  };

  render() {
    return (<>
     <View>
      <ScrollView 
       ref={(scrollView) => { _scrollView = scrollView; }}
       horizontal={true} pagingEnabled={true}
       >
         <Image source={require('../assets/1.jpeg')} style={{height:height/5 , width}} />
         <Image source={require('../assets/2.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/3.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/4.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/14.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/6.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/7.jpeg')} style={{height:height/5 , width}} />
         <Image source={require('../assets/8.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/9.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/10.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/11.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/12.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/1.jpeg')} style={{height:height/5 , width}} />
         <Image source={require('../assets/2.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/3.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/4.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/14.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/6.jpeg')} style={{height:height/5, width}} />
         <Image source={require('../assets/7.jpeg')} style={{height:height/5 , width}} />
      </ScrollView>
      <View style={styles.bgstyles}>
     </View>
    </View>
      <CalendarProvider
        date={ITEMS[0].title}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
        // theme={{
        //   todayButtonTextColor: themeColor
        // }}
        // todayBottomMargin={16}
      >
        {this.props.weekView ? (
          <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={this.getMarkedDates()} />
        ) : (
          <ExpandableCalendar
            testID={testIDs.expandableCalendar.CONTAINER}
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            initialPosition={ExpandableCalendar.positions.OPEN}
            calendarStyle={styles.calendar}
            // headerStyle={styles.calendar} // for horizontal only
            // disableWeekScroll
            theme={this.getTheme()}
            disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={{
              '2021-01-26': {marked: true, dotColor: colors.a},
              '2021-02-26': {marked: true,dotColor: colors.b},
              '2021-03-11': {marked: true, dotColor: colors.a},
              '2021-03-28': {marked: true,dotColor: colors.a},
              '2021-03-29': {marked: true, dotColor: colors.a},
              '2021-03-29': {marked: true, dotColor: colors.b},
              '2021-04-02': {marked: true, dotColor: colors.a},
              '2021-04-14': {marked: true,dotColor: colors.a},
              '2021-04-21': {marked: true, dotColor: colors.a},
              '2021-04-25': {marked: true,dotColor: colors.a},
              '2021-05-07': {marked: true, dotColor: colors.b},
              '2021-05-13': {marked: true, dotColor: colors.b},
              '2021-05-14': {marked: true, dotColor: colors.b},
              '2021-05-26': {marked: true, dotColor: colors.a},
              '2021-07-21': {marked: true, dotColor: colors.b},
              '2021-07-22': {marked: true, dotColor: colors.b},
              '2021-08-15': {marked: true, dotColor: colors.a},
              '2021-08-18': {marked: true, dotColor: colors.b},
              '2021-08-19': {marked: true, dotColor: colors.b},
              '2021-08-22': {marked: true, dotColor: colors.a},
              '2021-08-30': {marked: true, dotColor: colors.a},
              '2021-09-29': {marked: true, dotColor: colors.b},
              '2021-10-02': {marked: true, dotColor: colors.a},
              '2021-10-15': {marked: true, dotColor: colors.a},
              '2021-10-17': {marked: true, dotColor: colors.b},
              '2021-10-19': {marked: true, dotColor: colors.b},
              '2021-11-04': {marked: true, dotColor: colors.a},
              '2021-11-05': {marked: true, dotColor: colors.a},
              '2021-11-19': {marked: true, dotColor: colors.a},
              '2021-12-25': {marked: true, dotColor: colors.a},
            }}
          />
        )}
        <AgendaList
          sections={ITEMS}
          extraData={this.state}
          renderItem={this.renderItem}  
          theme={this.getTheme()}     
          // sectionStyle={styles.section}
        />
      </CalendarProvider></>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  bgstyles : {
    position: 'absolute',
    resizeMode: 'repeat',
    
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row'
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: colors.primary,
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14
  }
});