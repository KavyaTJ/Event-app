import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { play } from './Index';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { images } from './Photo';

export default function DetailedImage({route,navigation}:any) {
    const {item} = route.params;
    const {name} = route.params;
    const {index} = route.params;

  return (
    <>
      <View style={{flex: 1}}>
        <View>
          <SwiperFlatList
            autoplayLoop
            index={index}
            data={item.photos}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <Image style={styles.image} source={item} />
              </View>
            )}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
          }}>
          <View style={styles.topbar}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>navigation.navigate('Slideshow',{item:item,index:index})}>
              <Image style={styles.topImage} source={play} />
              
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <View style={styles.topbar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PhotoGallery',{img:item})}>
            <Image
              source={require('./assets/back.png')}
              style={styles.topImage}></Image>
          </TouchableOpacity>
          <Text style={styles.header}>{name}</Text>
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
  );}

   

const styles = StyleSheet.create({ container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  image: {
    width: Dimensions.get('window').width-10,
    height: Dimensions.get('window').height,
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
  },})