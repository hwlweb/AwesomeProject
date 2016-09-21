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

import Banner from '../component/banner';
import Marketing from './marketing';
import Categraties from './categraties';
import HotActivity from './hot-activity';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let self = this;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.home_warp}>
                    <Banner {...this.props}/>
                    <Marketing {...this.props}/>
                    <Categraties {...this.props}/>
                    <HotActivity {...this.props}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home_warp:{
       // marginTop:55
    },
    button:{

    },
    blackText:{

    }
});