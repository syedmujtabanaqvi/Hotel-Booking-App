import React, { Activity, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native'
import SegmentedControlTab from "react-native-segmented-control-tab";
const Booking = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image style={styles.arrow} source={require('../../assets/image/arrow.png')}>

        </Image>
      </TouchableOpacity>
      <Text style={styles.bookingtext} > Booking</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#8e8e93"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <View style={{ gap: 20 }}>
        <Text style={styles.loactiontext} > Location</Text>
        <SegmentedControlTab
          values={["Map", "Text"]}
          selectedIndex={selectedIndex}
          onTabPress={(index) => setSelectedIndex(index)}
          tabsContainerStyle={{ height: 40, backgroundColor: '#1c1c2e' }}
          tabStyle={{ backgroundColor: '#1c1c2e', borderColor: 'transparent' }}
          activeTabStyle={{ backgroundColor: '#3a3a4c' }}
          tabTextStyle={{ color: '#8e8e93' }}
          activeTabTextStyle={{ color: 'white' }}
        /></View>

      <Text style={styles.Difficultytext} > Difficulty</Text>

      <View style={styles.containerdifficulty}>
        <Text style={styles.Easytext} > Easy</Text>
        <Text style={styles.Hardtext} > Hard</Text>
      </View>
      <Slider
        style={styles.sliderStyle}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        minimumTrackTintColor="#2eb644"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#2eb644"
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
      <View style={styles.containerdifficulty}>
        <Text style={styles.DateRangetext} > Date Range</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#2b973d" }}
          thumbColor={isEnabled ? "#2eb644" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.container}>

        <View style={styles.row}>
          <View style={styles.dateWrapper}>
            <Text style={styles.subLabel}>From</Text>
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => setOpenStart(true)}
            >
              <Text style={styles.dateText}>
                {startDate.toDateString()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dateWrapper}>
            <Text style={styles.subLabel}>To</Text>
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => setOpenEnd(true)}
            >
              <Text style={styles.dateText}>
                {endDate.toDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <DatePicker
          modal
          open={openStart}
          date={startDate}
          mode="date"
          title="Select Start Date"
          onConfirm={(date) => {
            setOpenStart(false);
            setStartDate(date);
          }}
          onCancel={() => setOpenStart(false)}
        />

        <DatePicker
          modal
          open={openEnd}
          date={endDate}
          mode="date"
          title="Select End Date"
          minimumDate={startDate}
          onConfirm={(date) => {
            setOpenEnd(false);
            setEndDate(date);
          }}
          onCancel={() => setOpenEnd(false)}
        />
      </View>
      <Text style={styles.Activitytype}> Activity Type</Text>

      <View style={{ flexDirection: 'row', alignItems: 'flex-end', width: '100%', gap: 10, marginTop: '4%' }}>

        <View style={styles.slide}>
          <Image style={styles.imagecard} source={require('../../assets/image/hiking.png')}></Image>
<Text style={{color:'white',fontSize:19 , marginTop:'6%',marginLeft:'9%'}}> Hike</Text>
        </View>
        <View style={styles.slide}>
<Image style={styles.imagecard1} source={require('../../assets/image/climb.png')}></Image>
<Text style={{color:'white',fontSize:19 , marginTop:'7%',marginLeft:'6%'}}> Climb</Text>
        </View>
        <View style={styles.slide1}>
          <Image style={styles.imagecard2} source={require('../../assets/image/kayal.png')}></Image>
<Text style={{color:'white',fontSize:19 , marginTop:'10%',marginLeft:'2%'}}> kayak</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.loginbutton} onPress={()=>navigation.navigate('Searchandfilter')}>
        <Text style={styles.ApplyFiltertext}> Apply Filter </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 60,
    height: 30,
    marginTop: '9%',
    marginRight: '86%',
    tintColor: 'white'
  },
  bookingtext: {
    color: 'white',
    fontSize: 21,
    fontWeight: '600',
    marginTop: '-9%',
    marginLeft: '37%',
  },
  input: {
    width: '98%',
    color: 'white',
    fontSize: 16,
    marginTop: '9%',
    marginLeft: '2%',
    borderRadius: 5,
    backgroundColor: '#21253f'
  },
  loactiontext: {
    color: 'white',
    fontSize: 21,
    fontWeight: '600',
    marginTop: '9%',
    marginRight: '70%',

  },
  Difficultytext: {
    color: 'white',
    fontSize: 21,
    fontWeight: '600',
    marginTop: '6%',
    marginRight: '70%',

  },
  container: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: '#111425'
  },
  valueText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sliderStyle: {
    width: '100%',
    height: 40,
    marginTop: '1%'
  },
  containerdifficulty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },

  Easytext: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    marginTop: '5%',

  },
  Hardtext: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    marginTop: '5%',
  },
  DateRangetext: {
    color: 'white',
    fontSize: 21,
    fontWeight: '400',
    marginLeft: '-7%'
  },
  container: {
    flex: 1,
    backgroundColor: '#111425',
    padding: 20,
  },
  headerLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateWrapper: {
    width: '48%',
  },
  subLabel: {
    color: '#8e8e93',
    fontSize: 14,
    marginBottom: 5,
  },
  dateBox: {
    backgroundColor: '#1c1c2e',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3a3a4c',
  },
  dateText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  }, loginbutton: {

    height: '7%',
    width: '89%',
    backgroundColor: '#2eb644',
    marginLeft: '6%',
    marginTop: '6%',
    borderRadius: 4

  },
  ApplyFiltertext: {
    fontFamily: 'Arial',
    fontWeight: '900',
    color: "white",
    fontSize: 25,
    paddingTop: '2%',
    paddingLeft: '28%'
  }, Activitytype: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 21,
    fontWeight: '600'
    , marginRight: '60%'
  },
  slide: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#21253f',
    width: '10%',
    height: 50,
    borderRadius: 10,
    paddingLeft:'6%',
    paddingTop:'1%'
  },
  slide1: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#21253f',
    width: '10%',
    height: 50,
    borderRadius: 10,
    paddingLeft:'2%',
  },

  imagecard: {
    height: 45,
    width: '25%',
    borderRadius: 10,
  },
   imagecard1: {
    height: 45,
    width: '25%',
    borderRadius: 10,
  },imagecard2: {
    height: 40,
    width: '30%',
    borderRadius: 10,
  }
});

export default Booking;