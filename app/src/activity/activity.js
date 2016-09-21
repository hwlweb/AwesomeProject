import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableHighlight
} from 'react-native';

import HotActivity from '../home/hot-activity';

export default class Activity extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let self = this;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.home_warp}>
                    <HotActivity {...this.props}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home_warp:{
        // marginTop:55
    }
});