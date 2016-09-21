import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    TouchableHighlight,
    PickerIOS
} from 'react-native';

let PickerItemIOS = PickerIOS.Item;
let DropdownViewConfig = require('../config/DropdownViewConfig');

let pickers = {
    pickerName: [
        {
            pName: '',        // 数据请求参数value
            name: '全平台',    // 顶部Dropdown标题显示
        },
        {
            pName: 'pc',
            name: 'PC端',
        },
        {
            pName: 'mob',
            name: '移动端',
        }
    ]
}

var CAR_MAKES_AND_MODELS = {
    amc: {
        name: 'AMC'
    },
    alfa: {
        name: 'Alfa-Romeo'
    },
    aston: {
        name: 'Aston Martin'
    }
};

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carMake: 'cadillac',
            modelIndex: 3
        }
    }
    handlePickerChanged(newVal) {
        this.setState({
            carMake: newVal,
            modelIndex: 0
        })
    }
    render() {
        let mSelf = this;
        return (
            <View>
                <View style={styles.btnGroup}>
                    {
                        pickers.pickerName.map(function (picker, index) {
                            return (
                                <View style={styles.btnGropuItemContainer} key = {index}>
                                    <TouchableHighlight
                                        underlayColor={'#f1f1f1'}
                                        // onPress={handleBtnPressed.bind(mSelf, index) } 
                                        >
                                        <View style={styles.btnGropuItem}>
                                            <Text allowFontScaling={false}>{picker.name}</Text>
                                            <Image style={styles.btnGropuItemIcon} source={require('../images/drop-arrow.png') } />
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            )
                        })
                    }
                </View>

                <PickerIOS
                    selectedValue={this.state.carMake}
                    onValueChange={this.handlePickerChanged.bind(this) }>
                    {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
                        <PickerItemIOS
                            key={carMake}
                            value={carMake}
                            label={CAR_MAKES_AND_MODELS[carMake].name}
                            />
                    )) }
                </PickerIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnGroup: {
        flexDirection: 'row',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        justifyContent: 'center'
    },
    btnGropuItemContainer: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGropuItem: {
        flexDirection: 'row'
    },
    btnGropuItemIcon: {
        height: 10,
        width: 10,
        marginLeft: 5,
        marginTop: 2
    }
});