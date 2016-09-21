import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    ListView,
    TouchableHighlight,
    Modal,
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window');

let usrHelp = [
    {
        icon: require('../images/c1.png'),
        name: '我的订单'
    },
    {
        icon: require('../images/c2.png'),
        name: '购车帮助'
    },
    {
        icon: require('../images/c3.png'),
        name: '客服电话'
    }
]

let setConfig = [
    {
        icon: require('../images/c4.png'),
        name: '问题反馈'
    },
    {
        icon: require('../images/c5.png'),
        name: '个人设置'
    }
]

export default class User extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            userDataSource: null,
            setDataSource: null
        }
    }
    setUserData() {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            userDataSource: ds.cloneWithRows(usrHelp)
        });
    }
    setSetData() {
        var ds1 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            setDataSource: ds1.cloneWithRows(setConfig)
        });
    }
    componentWillMount() {
        this.setUserData();
        this.setSetData();
    }
    render() {
        return (
            <View style={styles.use_warp}>
                <View>
                    <Image source={require('../images/banner.png') } style={styles.banner}>
                        <Image source={require('../images/c8.png') } style={styles.user}/>
                        <Text style={styles.login_in}>立即登录</Text>
                    </Image>
                    <View style={styles.user_set}>
                        <ListView
                            initialListSize={4}
                            contentContainerStyle={styles.list}
                            dataSource={this.state.userDataSource}
                            renderRow={(rowData) =>
                                <View style={styles.mItems}>
                                    <Image source={rowData.icon} style={styles.icons}/>
                                    <View style={styles.items_font}>
                                        <Text style={styles.cate_name}>{rowData.name}</Text>
                                        <Image source={require('../images/c7.png')} style={styles.child_icons}/>
                                    </View>
                                </View>}
                            />
                    </View>
                    <View style={styles.device_set}>
                        <ListView
                            initialListSize={4}
                            contentContainerStyle={styles.list}
                            dataSource={this.state.setDataSource}
                            renderRow={(rowData) =>
                                <View style={styles.mItems}>
                                    <Image source={rowData.icon} style={styles.icons}/>
                                    <View style={styles.items_font}>
                                        <Text style={styles.cate_name}>{rowData.name}</Text>
                                        <Image source={require('../images/c7.png')} style={styles.child_icons}/>
                                    </View>
                                </View>}
                            />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    use_warp: {
        flex: 1,
        //marginTop: 55,
        backgroundColor:'#f2f2f2'
    },
    banner: {
        height: 150,
        width: width,
        justifyContent: 'center', //垂直方向居中
        alignItems: 'center', //左右方向居中
    },
    user: {
        width: 50,
        height: 50
    },
    login_in: {
        color: '#fff',
        marginTop: 5,
        backgroundColor:'transparent'
    },
    icons:{
        height:20,
        width:20,
        margin:10,
        marginTop:12
    },
    user_set:{
        backgroundColor:'#fff',
        marginTop:20,
        marginBottom:20
    },
    device_set:{
        backgroundColor:'#fff'
    },
    cate_name:{
        flex:1,
        paddingTop:15,
        paddingBottom:10
    },
    items_font:{
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        flexDirection: 'row',
        flex:1
    },
    mItems:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    child_icons:{
        height:15,
        width:15,
        marginRight:20,
        marginTop:15
    }
});