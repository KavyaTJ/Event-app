import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Home from '../Background/Home';
import {
  Wedding,
  Mehendi,
  Reception,
  Sangeet,
  m1,
  m2,
  m3,
  m4,
  s1,
  s2,
  s3,
  s4,
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,
  w8,
  w9,
  w10,
  r1,
  r2,
  r3,
  r4,
  r5,
  r6,
} from './Index';

  
export const images = [
  {
    id: 1,
    name: 'Wedding',
    cover: Wedding,
    photos: [w1, w2, w3, w4, w5,w6,w7,w8,w9,w10],
  },

  {
    id: 2,
    name: 'Mehendi',
    cover: Mehendi,
    photos: [m1,m2,m3,m4],
  },
  {
    id: 3,
    name: 'Sangeet',
    cover: Sangeet,
    photos: [s1,s2,s3,s4],
  },
  {
      id: 4,
      name: 'Reception',
      cover: Reception,
      photos: [r1,r2,r3,r4,r5,r6],
    },
];

export default function Photo({navigation,route}:any) {

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
           <Text style={styles.header}>PHOTOS</Text>
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
           data={images}
           renderItem={({item, index}) => (
             <TouchableOpacity
               onPress={() => navigation.navigate('PhotoGallery', {img:item})}>
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
