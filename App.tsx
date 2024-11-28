import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './HOTC/Wedding/Background/Home';
import Photo from './HOTC/Wedding/Photos/Photo';
import PhotoGallery from './HOTC/Wedding/Photos/PhotoGallery';
import Video from './HOTC/Wedding/Videos/Video';
import DetailedImage from './HOTC/Wedding/Photos/DetailedImage';
import VideoDisplay from './HOTC/Wedding/Videos/VideoDisplay';
import VideoPlay from './HOTC/Wedding/Videos/VideoPlay';
import Slideshow from './HOTC/Wedding/Photos/Slideshow';
import Splash from './HOTC/Wedding/Background/Splash';
// import Photo from './Wedding/Photos/Photo';
// import Video from './Wedding/Videos/Video';





const Stack = createNativeStackNavigator();
export const AppContext = createContext([]);
const App = () => {

    return (


        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
                <Stack.Screen name='Photo' component={Photo} options={{headerShown:false}} />
                <Stack.Screen name='PhotoGallery' component={PhotoGallery} options={{headerShown:false}} />
                <Stack.Screen name='DetailedImage' component={DetailedImage} options={{headerShown:false}} />
                <Stack.Screen name='Video' component={Video} options={{headerShown:false}} />
                <Stack.Screen name='VideoDisplay' component={VideoDisplay} options={{headerShown:false}} />
                <Stack.Screen name='VideoPlay' component={VideoPlay} options={{headerShown:false}} />
                <Stack.Screen name='Slideshow' component={Slideshow} options={{headerShown:false}} />
            </Stack.Navigator>
            
           
        </NavigationContainer>
    )}
 

export default App;