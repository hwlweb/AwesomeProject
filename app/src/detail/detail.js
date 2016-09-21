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
import ActivityScreen from '../activity/activity_screen'

export default class Detail extends Component {
    constructor(props){
        super(props);
    }
    toMain() {
        this.navigator.pop();
    }
    componentDidMount() {
        this.props.hideNavBar(this.props.routeId);
    }
    render() {
        return (
            <View style={styles.detailContainView}>
                <ActivityScreen source={'http://m.kuaiqiangche.com' + this.props.data} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailContainView:{
        marginTop:25
    },
    button:{

    },
    blackText:{

    }
})