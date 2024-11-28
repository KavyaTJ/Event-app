import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationHelpersContext } from '@react-navigation/native';

export default function Splash({navigation}:any) {

    const [isLoad, setIsLoad] = useState(false);

    setTimeout(() => {
    //   setIsLoad(true);
      navigation.navigate('Home')
    }, 5000);
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#474747',
      }}>
      <Text style={{fontSize: 80, color: '#D7BA54'}}>SPLASH SCREEN </Text>
    </View>
  );
}

const styles = StyleSheet.create({})