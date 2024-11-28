import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import{pause,playvid} from './Index'

const Controls = (props: { playing: any; onPlay: any; onPause: any; }) => {
  const {playing, onPlay, onPause} = props;

  return (
    <View style={styles.wrapper}>


      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
        <Image source={pause} style={{height:70, width:70}}/>
        ) : (
   
        <Image source={playvid} style={{height:80, width:70}}/>

        )}
      </TouchableOpacity>

   
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default Controls;