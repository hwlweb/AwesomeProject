import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

export default class NavBarBack extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.nav_bar}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigator.pop() }>
                    <Image source={require('../images/back.png') } style={styles.backImage} />
                </TouchableOpacity>
                <View style={styles.navbar_txt}>
                    <Text style={styles.headText}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backImage: {
        height: 25,
        width: 25,
        marginLeft: 15
    },
    nav_bar:{
        flexDirection: 'row',
        height:40,
        marginTop:25,
        paddingTop:5
    },
    navbar_txt:{
        flex:1,
        alignItems: 'center'
    },
    headText:{
        paddingTop:3
    }
});