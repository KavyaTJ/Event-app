import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Modal,
  } from 'react-native';


import { back, play ,Home} from '../Photos/Index';
import { playvid } from './Index';


export default function VideoDisplay({navigation,route}:any){
    const {vid} = route.params;
    const {tumb} = route.params;
    console.log(vid.event)
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../Background/Assets/BackgroundImg.png')}
          resizeMode="cover">
          <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1}}>
            <View
              style={styles.headerSection}>
              <TouchableOpacity style={styles.button}      onPress={() => navigation.navigate('Video')}>
                <Image source={back} style={styles.topImage}></Image>
              </TouchableOpacity>
              <Text style={styles.header}>{vid.name}</Text>
              <TouchableOpacity style={styles.button}       onPress={() => navigation.navigate('Home')}>
                <Image source={Home} style={styles.topImage}></Image>
              </TouchableOpacity>
            </View>

            <FlatList
              contentContainerStyle={styles.cardContent}
              horizontal
              data={vid.event}
              keyExtractor={item => item.toString()}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.card}>
                   
                      <ImageBackground
                        source={item}
                        style={{flex: 1}}
                        resizeMode="cover">
                        <TouchableOpacity
                          onPress={() => {navigation.navigate('VideoPlay',{item:vid.event,index:index}) }}
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            // backgroundColor: 'rgba(0,0,0,0.3)',
                          }}>
                              <Image source={playvid} style={styles.playImage} />
                   
                        </TouchableOpacity>
                      </ImageBackground>
                    </View>
                    </View>)}}/>

                    </View></ImageBackground></View>)} 



const styles = StyleSheet.create({
    headerSection: {
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
      color: '#fff',
      fontWeight: '800',
      textTransform: 'uppercase',
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 60,
      width: 60,
      height: 60,
      marginHorizontal: 30,
      borderColor: '#fff',
    },
    card: {
      width: 450,
      height: 350,
      margin: 4,
      borderWidth: 5,
      borderColor: '#fff',
    },
    cardContent: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    playImage: {
      width: 50,
      height: 60,
   
      // borderRadius: 80,
    },
  });
  