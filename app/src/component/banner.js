import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper2';

export default class Banner extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} height={221} autoplay={true}>
        <View style={styles.slide1}>
          <Image source={require('../images/01.jpg')} />
        </View>
        <View style={styles.slide2}>
          <Image source={require('../images/02.jpg')} />
        </View>
        <View style={styles.slide3}>
          <Image source={require('../images/03.jpg')} />
        </View>
        <View style={styles.slide3}>
          <Image source={require('../images/04.jpg')} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

