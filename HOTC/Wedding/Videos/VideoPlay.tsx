import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { max, min, v1 } from './Index'
import Controls from './Controls'
import Orientation from 'react-native-orientation-locker'
import { colors } from 'react-native-swiper-flatlist/src/themes'
import Video from 'react-native-video'



export default function VideoPlay({route,navigation}:any) {
    const {item}=route.params
    const {video}=route.params
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [play, setPlay] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [showControl, setShowControl] = useState(true);
    const handleOrientation = (orientation: string) => {
      if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
        setFullscreen(true);
        StatusBar.setHidden(true);
      } else {
        setFullscreen(false);
        StatusBar.setHidden(false);
      }
    };
    useEffect(() => {
      Orientation.addOrientationListener(handleOrientation);
      return () => {
        Orientation.removeOrientationListener(handleOrientation);
      };
    }, []);
    const handlePlayPause = () => {
      if (play) {
        setPlay(false);
        setShowControl(true);
        return;
      }
      setTimeout(() => setShowControl(false), 2000);
      setPlay(true);
    };
  
    const handlePlay = () => {
      setTimeout(() => setShowControl(false), 500);
      setPlay(true);
    };

    const handleControls = () => {
      if (showControl) {
        setShowControl(false);
      } else {
        setShowControl(true);
      }
    };

    const handleFullscreen = () => {
      if (fullscreen) {
        Orientation.unlockAllOrientations();
      } else {
        Orientation.lockToLandscapeLeft();
      }
    };
  const onLoadEnd = (data: { duration: React.SetStateAction<number>; currentTime: React.SetStateAction<number> }) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = (data: { currentTime: React.SetStateAction<number> }) => {
    setCurrentTime(data.currentTime);
  };


  
  return (
    <>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleControls}>
        <Video
          source={item}
          onBuffer={() => {}}
          onError={() => {}}
          paused={!play}
          controls={true}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '60%',
            backgroundColor: 'black',
          }}
        />
        {showControl && (
          <>
            <View style={styles.controlOverlay}>
              <Controls
                onPlay={handlePlay}
                onPause={handlePlayPause}
                playing={play}
              />
              <TouchableOpacity onPress={handleFullscreen} style={{alignItems:'flex-end',bottom:260,margin:20}}>
                {fullscreen ? (
                  <Image source={max} style={{height: 60, width: 60}} />
                ) : (
                  <Image source={min} style={{height: 60, width: 60}} />
                )}
              </TouchableOpacity>
            </View>
          </>
        )}
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <View style={styles.topbar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VideoDisplay', {vid: video})}>
            <Image
              source={require('./assets/back.png')}
              style={styles.topImage}></Image>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./assets/Home.png')}
              style={styles.topImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 10,
    height: 300,
    margin: 5,
  },
  imgstyle: {
    flex: 1,
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 100,
  },
  fullscreenButton: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  topImage: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 50,
    color: '#ffff',
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  button: {
    backgroundColor: '#ffff',
    borderRadius: 60,
    width: 60,
    height: 60,
    borderColor: '#ffff',
  },
  controlOverlay: {
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  },
});

