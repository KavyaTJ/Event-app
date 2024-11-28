import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Home from '../Background/Home';
import {v1,v2,v3,v4, vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8} from './Index'
import { m1, m2, m3, m4, r1, r2, r3, r4, r5, r6, s1, s2, s3, s4 } from '../Photos/Index';

  
const Video = [
  {
    id: 1,
    name: 'Wedding',
    cover: v1,
    thumbnail:[m1,m2,m3,m4],
    Videos:{event:[vid5,vid6,vid7]},
  },

  {
    id: 2,
    name: 'Mehendi',
    cover: v2,
    thumbnail:[m1,m2],
    Videos: {event:[vid5,vid6,vid7]},
  },
  {
    id: 3,
    name: 'Sangeet',
    cover: v3,
    thumbnail:[s1,s2],
    Videos: {event:[vid5,vid6,vid7]},
  },
  {
      id: 4,
      name: 'Reception',
      cover: v4,
      thumbnail:[r1,r2],
      Videos:{event:[vid5,vid6,vid7]},
    },
];

export default function EventVideo({navigation}:any) {


 return (
   <View style={styles.container}>
     <ImageBackground
       style={{flex: 1}}
       source={require('../Background/Assets/BackgroundImg.png')}
       resizeMode="cover">
       <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
         <View style={styles.topbar}>
           <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate('Home')}>
             <Image
               source={require('./assets/back.png')}
               style={styles.img}></Image>
           </TouchableOpacity>
           <Text style={styles.header}>VIDEO</Text>
           <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate('Home')}>
             <Image
               source={require('./assets/Home.png')}
               style={styles.img}></Image>
           </TouchableOpacity>
         </View>
         <FlatList
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.content}
           data={Video}
           renderItem={({item, index}) => (
             <TouchableOpacity
               onPress={() => navigation.navigate('VideoDisplay', {vid:item.Videos,tumb:item.thumbnail})}>
               <Image
                 source={item.cover}
                 key={index}
                 style={{
                   width: 234,
                   height: 270,
                   borderWidth: 1,
                   borderColor: '#FFFFFF',
                   borderRadius: 2,
                   resizeMode: 'contain',
                   margin: 8,
                 }}
               />
             </TouchableOpacity>
           )}
         />
       </View>
     </ImageBackground>
   </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
 
  },
  img: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 60,
    width: 60,
    height: 60,
    marginHorizontal: 30,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: 20,
  },
  
});
