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

let { width, height } = Dimensions.get('window')
import NavBarBack from '../component/nav_bar_back';

export default class ActivityScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let self = this;
        return (
            <View style={styles.container}>
                <NavBarBack {...this.props}/>
                <WebView style={styles.webview_style}
                    source={{ uri: self.props.url }}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    scrollEnabled={true}
                    >
                </WebView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webview_style: {
        marginBottom: 100,
        height: height
    }
});