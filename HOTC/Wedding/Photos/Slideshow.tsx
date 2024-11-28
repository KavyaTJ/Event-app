import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { pause } from './Index'

export default function Slideshow({route,navigation}:any) {
    const {item}=route.params
    const {index}=route.params
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={index}
        data={item.photos}
        renderItem={({item,index}) => (
          <View style={{flex: 1}}>
            <Image style={styles.image} source={item} />
          </View>
        )}
      />
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
              onPress={() =>navigation.navigate('DetailedImage',{item:item,index:index})}>
              <Image style={styles.topImage} source={pause} />
              
            </TouchableOpacity>
          </View>
        </View>
      </View>

  );
}


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