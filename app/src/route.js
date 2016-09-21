import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator
} from 'react-native';

import Navgation from './component/nav';
import Home from './home/home';
import DetailScreen from './detail/detail';

class Main extends Component {
    render() {
        return (
            <Navigator
                style = {styles.container}
                initialRoute={{ component: Navgation }}  //设置默认首页
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
    /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }
    /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        height: 60,
        marginTop: 20
    }
});

AppRegistry.registerComponent('AwesomeProject', () => Main);


