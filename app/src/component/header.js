import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class Header extends Component {
    render() {
        return ( < View  style={styles.header_wrap}/ > )
    }
}

const styles = StyleSheet.create({
    header_wrap: {
        height: 25,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        backgroundColor:'#f2f2f2'
    }
})