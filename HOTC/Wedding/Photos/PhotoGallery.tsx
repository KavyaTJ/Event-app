
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



export default function PhotoGallery({route,navigation}:any) {
  const {img} = route.params;

 console.log(img.photos.length)
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          style={styles.imgstyle}
          data={img.photos}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={{position: 'relative'}}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailedImage', {
                        item: img,
                        name: img.name,
                        imglength: img.photos.length,
                        index: index,
                      })
                    }>
                    <Image style={styles.image} source={item} />
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
          }}>
          <View style={styles.topbar}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Photo', {img: img})}>
              <Image
                source={require('./assets/back.png')}
                style={styles.topImage}></Image>
            </TouchableOpacity>
            <Text style={styles.header}>{img.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('./assets/Home.png')}
                style={styles.topImage}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
});