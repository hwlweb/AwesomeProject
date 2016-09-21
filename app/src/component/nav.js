import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Header from './header';
import Home from '../home/home';
import Activity from '../activity/activity';
import User from '../user/user';
import Search from '../search/search';

const navConfig = {
    homeTab: '首页',
    home: require('../images/a2_2.png'),
    homeHover: require('../images/a2_hover.png'),
    searchTab: '选车',
    searchCar: require('../images/a3_2.png'),
    searchCarHover: require('../images/a3_hover.png'),
    activityTab: '活动',
    activity: require('../images/a4_2.png'),
    activityHover: require('../images/a4_hover.png'),
    userTab: '我的',
    user: require('../images/a5.png'),
    userHover: require('../images/a5_hover.png')
}

export default class Navgation extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: navConfig.searchTab }
    }
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title = {tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag }) }>
                {childView}
            </TabNavigator.Item>
        );
    }
    static _createChildView(tag) {
        return (
            <View style={styles.nav_text}>
                <Text>{tag}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header/>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(navConfig.home, navConfig.homeHover, navConfig.homeTab, <Home navigator={this.props.navigator}/>) }
                    {this._renderTabItem(navConfig.searchCar, navConfig.searchCarHover, navConfig.searchTab, <Search/>) }
                    {this._renderTabItem(navConfig.activity, navConfig.activityHover, navConfig.activityTab, <Activity navigator={this.props.navigator}/>) }
                    {this._renderTabItem(navConfig.user, navConfig.userHover, navConfig.userTab, <User navigator={this.props.navigator}/>) }
                </TabNavigator>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        alignItems: 'center',
    },
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
        marginTop: 6
    },
    nav_text: {
        marginTop: 55
    }
});