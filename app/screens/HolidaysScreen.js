import React from "react";
<<<<<<< HEAD
import {FlatList, StyleSheet, View} from "react-native";
=======
import {FlatList, StyleSheet, View } from "react-native";
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
//import { Dropdown } from 'react-native-material-dropdown-v2';

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
    title: "26 January: Republic Day",
<<<<<<< HEAD
    subTitle: "Republic Day is a national holiday in India. It honours the date on which the Constitution of India came into effect on 26 January 1950 replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.",
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 2,
    title: "26 February: Youm-e-Wiladat Hazrat Ali",
<<<<<<< HEAD
    subTitle: "It is the birth of Ali ibn Abi Talib (13 September 601 – 29 January 661) was a cousin and son-in-law of the Islamic Prophet Muhammad, who ruled as the fourth caliph from 656 to 661. He is one of the central figures in Islam.",
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 3,
    title: "11 March: Maha Shivratri",
<<<<<<< HEAD
    subTitle: "Maha Shivaratri is a Hindu festival celebrated annually in honour of the god Shiva. The name also refers to the night when Shiva performs the heavenly dance. There is a Shivaratri in every luni-solar month of the Hindu calendar, on the month's 13th night/14th day, but once a year in late winter (February/March) and before the arrival of Summer, marks Maha Shivaratri which means, the Great Night of Shiva",
  },
  {
    id: 4,
    title: "28 - 29 March: Holi",
    subTitle: "Holi is a popular ancient Hindu festival, also known as the Indian festival of spring, the festival of colours, and the festival of love. The festival signifies the triumph of good over evil.",
=======
  },
  {
    id: 4,
    title: "28-29 March: Holi",
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 5,
    title: "29 March: Shab-e-Barat",
<<<<<<< HEAD
    subTitle: "Shab-e-Barat, Barat Night or Cheragh e Brat (light) is a Muslim holiday , celebrated on the 15th night, the night between 14 & 15 of the month of Sha'ban, the eighth month of the Islamic calendar.",
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 6,
    title: "02 April: Good Friday",
<<<<<<< HEAD
    subTitle:"Good Friday is a Christian holiday commemorating the crucifixion of Jesus and his death at Calvary. "
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 7,
    title: "14 April: Dr. B.R. Ambedkar Jayanti",
<<<<<<< HEAD
    subTitle:"Rama Navami is a spring Hindu festival that celebrates the birthday of the Hindu God Lord Rama. "
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 8,
    title: "21 April: Ram Navami",
<<<<<<< HEAD
    subTitle:"Rama Navami is a spring Hindu festival that celebrates the birthday of the Hindu God Lord Rama. "
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 9,
    title: "25 April: Mahavir Jayanti",
<<<<<<< HEAD
    subTitle:"Mahavir Jayanti is a festival that is crucially important in the Jain religion. It is the occasion to celebrate the birth of the 24th or the last Tirthankara, Mahavira. "
=======
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
  },
  {
    id: 10,
    title: "07 May: Jumatul Wida",
<<<<<<< HEAD
    subTitle:"Jumu'atul-Widaa'‎ meaning Friday of farewell, also called as Al-Widaa Juma is the last Friday in the month of Ramadhan before Eid-ul-Fitr. "
  },
  {
    id: 11,
    title: "13 - 14 May: Eid-ul-Fitr",
    subTitle:"Eid al-Fitr also called the Festival of Breaking the Fast, is a religious holiday celebrated by Muslims worldwide that marks the end of the month-long dawn-to-sunset fasting of Ramadan. "
  },
  {
    id: 12,
    title: "26 May: Budha Jayanti",
    subTitle:"Budha Jayanti or Buddha's Birthday is a Buddhist festival that is celebrated in most of East Asia commemorating the birth of the Prince Siddhartha Gautama, who was the founder of Buddhism. "
  },
  {
    id: 13,
    title: "21 - 22 July: Eid-ul-Azha",
    subTitle:"Eid ul' Azha or Eid ul' Zuha, commonly known as Bakri Eid, is a three-day festival that is celebrated from the 10th day of the Islamic month of Zulhijja, the final month of the calendar. It commemorates Prophet Ibrahim's willingness to offer his son Ismail for Allah's sake. "
  },
  {
    id: 14,
    title: "15 August: Independence Day ",
    subTitle:"Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947, the day when the provisions of the Indian Independence Act 1947, which transferred legislative sovereignty to the Indian Constituent Assembly, came into effect.  "
  },
  {
    id: 15,
    title: "18 - 19 August: Moharram",
    subTitle:"Moḥarram is the first month of the Islamic calendar. It is one of the four sacred months of the year when warfare is forbidden. It is held to be the second holiest month, after Ramaḍān. The Tenth day of Muharram is known as the Day of Ashura. Muslims mourn the martyrdom of Ḥusayn ibn ʿAlī and his family. "
  },
  {
    id: 16,
    title: "22 August: Raksha Bandhan",
    subTitle:"Raksha Bandhan is a popular, traditionally Hindu, annual rite which is central to a festival of the same name, celebrated in India, Nepal and other parts of the Indian subcontinent, and among people around the world influenced by Hindu culture."
  },
  {
    id: 17,
    title: "30 August: Janamashtami",
    subTitle:"Janmashtami is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. It is observed according to the Hindu lunisolar calendar, on the eighth day (Ashtami) of the Krishna Paksha in Shraavana or Bhadrapad. "
  },
  {
    id: 18,
    title: "29 September: Chehlum",
    subTitle:"Chehlum is a religious observance that occurs forty days after the Day of Ashura. It commemorates the martyrdom of Husayn ibn Ali, the grandson of Muhammad, who was killed on the 10th day of the month of Muharram. "
  },
  {
    id: 19,
    title: "02 October: Gandhi Jayanti",
    subTitle:"Gandhi Jayanti is an event celebrated in India to mark the birthday of Mahatma Gandhi. It is celebrated annually on 2 October, and it is one of the three national holidays of India. "
  },
  {
    id: 20,
    value: "15 October: Dushehra",
    subTitle:"Dussehra also known as Vijayadashami is a major Hindu festival celebrated at the end of Navaratri every year. It is observed on the tenth day in the Hindu calendar month of Ashvin, the seventh month of the Hindu Luni-Solar Calendar, which typically falls in the Gregorian months of September and October. "
  },
  {
    id: 21,
    value: "17 October: Sir Syed Day",
    subTitle:"Sir Syed’s Day is observed on 17th October to mark the birth anniversary of Sir Syed Ahmad Khan. Sir Syed Ahmad Khan was the founder of Aligarh Muslim University and he was born in 1817 in a family that was close to the Mughal court, he was a man of many distinctions, a civil servant, journalist, educationist, social reformer and historian among others. "
  },
  {
    id: 22,
    value: "19 October: Eid-Milad-un-Nabi",
    subTitle:"Eid Milad un Nabi is the observance of the birthday of the Islamic prophet Muhammad which is commemorated in Rabi' al-awwal, the third month in the Islamic calendar. "
  },
  {
    id: 23,
    title: "04 - 05 November: Deepawali",
    subTitle:"Diwali or Deepavali is a festival of lights and one of the major festivals celebrated by Hindus, Jains and Sikhs. The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika. "
  },
  {
    id: 24,
    title: "19 November: Guru Nanak Birthday",
    subTitle:"Guru Nanak born as Nanak on 15 April 1469 – 22 September 1539), also referred to as Baba Nanak was the founder of Sikhism and is the first of the ten Sikh Gurus. His birth is celebrated worldwide as Guru Nanak Gurpurab."
  },
  {
    id: 25,
    title: "25 December: Christmas",
    subTitle:"Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. "
  },

];
function HolidaysScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>HOLIDAYS 2021</Text>
=======
  },
  {
    id: 11,
    title: "13 May: Eid-ul-Fitr",
  },
  {
    id: 12,
    title: "14 May: Eid-ul-Fitr",
  },
  {
    id: 13,
    title: "26 May: Budha Jayanti",
  },
  {
    id: 14,
    title: "21 July: Eid-ul-Azha",
  },
  {
    id: 15,
    title: "22 July: Eid-ul-Azha",
  },
  {
    id: 16,
    title: "15 August: Independence Day ",
  },
  {
    id: 17,
    title: "18 August: Moharram",
  },
  {
    id: 18,
    title: "19 August: Moharram",
  },
  {
    id: 19,
    title: "22 August: Raksha Bandhan",
  },
  {
    id: 20,
    title: "30 August: Janamashtami",
  },
  {
    id: 21,
    title: "29 September: Chehlum",
  },
  {
    id: 22,
    title: "02 October: Gandhi Jayanti",
  },
  {
    id: 23,
    value: "15 October: Dushehra",
  },
  {
    id: 24,
    value: "17 October: Sir Syed Day",
  },
  {
    id: 25,
    value: "19 October: Eid-Milad-un-Nabi",
  },
  {
    id: 26,
    title: "04 November: Deepawali",
  },
  {
    id: 27,
    title: "05 November: Deepawali",
  },
  {
    id: 28,
    title: "19 November: Guru Nanak Birthday",
  },
  {
    id: 29,
    title: "25 December: Christmas",
  },
  {
    id: 30,
    title: "Republic Day",
    body: "Republic Day is a national holiday in India. It honours the date on which the Constitution of India came into effect on 26 January 1950 replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.",
  },
  {
    id: 31,
    title: "Youm-e-Wiladat Hazrat Ali",
    body: "It is the birth of Ali ibn Abi Talib (13 September 601 – 29 January 661) was a cousin and son-in-law of the Islamic prophet Muhammad, who ruled as the fourth caliph from 656 to 661. He is one of the central figures in Islam.",
  },
  {
    id: 32,
    title: "Maha Shivratri",
    body: "Maha Shivaratri is a Hindu festival celebrated annually in honour of the god Shiva. The name also refers to the night when Shiva performs the heavenly dance. There is a Shivaratri in every luni-solar month of the Hindu calendar, on the month's 13th night/14th day, but once a year in late winter (February/March) and before the arrival of Summer, marks Maha Shivaratri which means, the Great Night of Shiva",
  },
  {
    id: 33,
    title: "Holi",
    body: "Holi is a popular ancient Hindu festival, also known as the Indian festival of spring, the festival of colours, and the festival of love. The festival signifies the triumph of good over evil.",
  },
  {
    id: 34,
    title: "Shab-e-Barat",
    body: "Shab-e-Barat, Barat Night or Cheragh e Brat (light) is a Muslim holiday , celebrated on the 15th night, the night between 14 & 15 of the month of Sha'ban, the eighth month of the Islamic calendar.",
  },
];
{/*26-01-2021	Republic Day	Republic Day is a national holiday in India. It honours the date on which the Constitution of India came into effect on 26 January 1950 replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.
26-02-2021	Youm-e-Wiladat Hazrat Ali	It is the birth of Ali ibn Abi Talib (13 September 601 – 29 January 661) was a cousin and son-in-law of the Islamic prophet Muhammad, who ruled as the fourth caliph from 656 to 661. He is one of the central figures in Shia Islam and is regarded as the rightful immediate successor to Muhammad as an Imam by Shia Muslims.
11-03-2021	Maha Shivratri	Maha Shivaratri is a Hindu festival celebrated annually in honour of the god Shiva. The name also refers to the night when Shiva performs the heavenly dance. There is a Shivaratri in every luni-solar month of the Hindu calendar, on the month's 13th night/14th day, but once a year in late winter (February/March) and before the arrival of Summer, marks Maha Shivaratri which means "the Great Night of Shiva".
28-03-2021	Holi	Holi is a popular ancient Hindu festival, also known as the Indian "festival of spring", the "festival of colours", and the "festival of love". The festival signifies the triumph of good over evil.
29-03-2021	Holi	
29-03-2002	Shab-e-Barat	Shab-e-Barat, Barat Night or Cheragh e Brat (light) is a Muslim holiday , celebrated on the 15th night, the night between 14 & 15 of the month of Sha'ban, the eighth month of the Islamic calendar.
02-04-2021	Good Friday	Good Friday is a Christian holiday commemorating the crucifixion of Jesus and his death at Calvary.
14-04-2021	Dr. B.R. Ambedkar Jayanti	Ambedkar Jayanti or Bhim Jayanti is an annual festival observed on 14 April to commemorate the memory of B. R. Ambedkar, Indian polymath, the father of the Constitution of India and civil rights activist. It marks Dr. Babasaheb Ambedkar's birthday who was born on 14 April 1891.
21-04-2021	Ram Navami	Rama Navami is a spring Hindu festival that celebrates the birthday of the Hindu God Lord Rama.
25-04-2021	Mahavir Jayanti	Mahavir Jayanti is a festival that is crucially important in the Jain religion. In fact, it is often described as the most important festival in the Jain calendar. Mahavir Jayanti is the occasion to celebrate the birth or coming into the physical world of the 24th or the last Tirthankara, Lord Mahavira.
07-05-2021	Jumatul Wida	Jumu'atul-Widaa'‎ meaning Friday of farewell, also called as Al-Widaa Juma is the last Friday in the month of Ramadhan before Eid-ul-Fitr.
13-05-2021	Eid-ul-Fitr	Eid al-Fitr also called the "Festival of Breaking the Fast", is a religious holiday celebrated by Muslims worldwide that marks the end of the month-long dawn-to-sunset fasting of Ramadan.
14-05-2021	Eid-ul-Fitr	
26-05-2021	Budha Jayanti	Budha Jayanti or Buddha's Birthday is a Buddhist festival that is celebrated in most of East Asia commemorating the birth of the Prince Siddhartha Gautama, later the Gautama Buddha, who was the founder of Buddhism.
21-07-2021	Eid-ul-Azha	Eid ul' Azha or Eid ul' Zuha, commonly known as Bakri Eid, is a three-day festival that is celebrated from the 10th day of the Islamic month of Zulhijja, the final month of the calendar. It commemorates Prophet Ibrahim's willingness to offer his son Ismail for Allah's sake.
22-07-2021	Eid-ul-Azha	
15-08-2021	Independence Day	Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947, the day when the provisions of the Indian Independence Act 1947, which transferred legislative sovereignty to the Indian Constituent Assembly, came into effect. 
18-08-2021	Moharram	Moḥarram is the first month of the Islamic calendar. It is one of the four sacred months of the year when warfare is forbidden. It is held to be the second holiest month, after Ramaḍān. The Tenth day of Muharram is known as the Day of Ashura. Muslims mourn the martyrdom of Ḥusayn ibn ʿAlī and his family.
19-08-2021	Moharram	
22-08-2021	Raksha Bandhan	Raksha Bandhan is a popular, traditionally Hindu, annual rite, or ceremony, which is central to a festival of the same name, celebrated in India, Nepal and other parts of the Indian subcontinent, and among people around the world influenced by Hindu culture. On this day, sisters of all ages tie a talisman, or amulet, called the rakhi, around the wrists of their brothers, symbolically protecting them, receiving a gift in return, and traditionally investing the brothers with a share of the responsibility of their potential care.
30-08-2021	Janamashtami	Janmashtami is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. It is observed according to the Hindu lunisolar calendar, on the eighth day (Ashtami) of the Krishna Paksha (dark fortnight) in Shraavana or Bhadrapad (depending on whether the calendar chooses the new moon or full moon day as the last day of the month).
28-09-2021	Chehlum	Chehlum is a religious observance that occurs forty days after the Day of Ashura. It commemorates the martyrdom of Husayn ibn Ali, the grandson of Muhammad, who was killed on the 10th day of the month of Muharram.
02-10-2021	Gandhi Jayanti	Gandhi Jayanti is an event celebrated in India to mark the birthday of Mahatma Gandhi. It is celebrated annually on 2 October, and it is one of the three national holidays of India.
15-10-2021	Dushehra	Dussehra also known as Vijayadashami is a major Hindu festival celebrated at the end of Navaratri every year. It is observed on the tenth day in the Hindu calendar month of Ashvin, the seventh month of the Hindu Luni-Solar Calendar, which typically falls in the Gregorian months of September and October.
17-10-2021	Sir Syed Day	Sir Syed’s Day is observed on 17 th October to mark the birth anniversary of Sir Syed Ahmad Khan. Sir Syed Ahmad Khan was the founder of Aligarh Muslim University and he was born in 1817 in a family that was close to the Mughal court, he was a man of many distinctions, a civil servant, journalist, educationist, social reformer and historian among others.
19-10-2021	Eid-Milad-un-Nabi	Eid Milad un Nabi is the observance of the birthday of the Islamic prophet Muhammad which is commemorated in Rabi' al-awwal, the third month in the Islamic calendar.
04-11-2021	Deepawali	Diwali or Deepavali is a festival of lights and one of the major festivals celebrated by Hindus, Jains and Sikhs. The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November).
05-11-2021	Deepawali	
19-11-2021	Guru Nanak Birthday	Guru Nanak born as Nanak on 15 April 1469 – 22 September 1539), also referred to as Baba Nanak ('father Nanak') was the founder of Sikhism and is the first of the ten Sikh Gurus. His birth is celebrated worldwide as Guru Nanak Gurpurab on Katak Pooranmashi ('full-moon of the Katak'), i.e. October–November.
25-12-2021	Christmas	Christmas (or Feast of the Nativity) is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.
*/}

function HolidaysScreen({navigation}) {
  return (
    <Screen style={styles.container}>
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <Card
<<<<<<< HEAD
          title={item.title}
          subTitle={item.subTitle}
=======
          title={item.id+". "+item.title}
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
  container: {
    paddingTop: 20,
=======
  container: {
    paddingTop: 30,
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default HolidaysScreen;
