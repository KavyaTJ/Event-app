import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { hp, wp } from "./Dim";
import React, {useState, useEffect, useContext} from 'react';
const Home = ({navigation}:any) => {
  const {width, height} = Dimensions.get('window');
  console.log(hp)


  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1,width:width,height:height}}
        source={require('../Background/Assets/BackgroundImg.png')}
        resizeMode="cover">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
          <View style={styles.headerContent}>
            <Text style={styles.heading}>SOBIA & ZOHAIB</Text>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.button}    onPress={() => navigation.navigate('Photo')}>
              <Text style={styles.buttonText}>PHOTOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Video')}>
              <Text style={styles.buttonText}>VIDEOS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  heading: {
    color: '#FFFFFF',
    // fontSize: 75,
    fontSize: wp('8%'),
    position: 'absolute',
    fontWeight: '500',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // width: 605,
    // height: 111,
    // top: 140,
    // height: hp("30%"),
    // width: wp("70%"),
    top: hp('20%'),
  },
  buttonSection: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // width: 250,
    // height: 100,
    height: hp('10%'),
    alignSelf: 'center',
    width: wp('35%'),
    borderColor: '#FFFFFF',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    // fontSize: 40,
    fontSize: wp('3.5%'),
    fontWeight: '500',
  },
});
