import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Animated,
    TouchableHighlight,
    Picker,
    PickerIOS
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
    amc: {
        name: 'AMC',
        models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
    },
    alfa: {
        name: 'Alfa-Romeo',
        models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
    },
    aston: {
        name: 'Aston Martin',
        models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
    },
    audi: {
        name: 'Audi',
        models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
    },
    austin: {
        name: 'Austin',
        models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
    },
    borgward: {
        name: 'Borgward',
        models: ['Hansa', 'Isabella', 'P100'],
    },
    buick: {
        name: 'Buick',
        models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
            'Roadmaster', 'Skylark'],
    },
    cadillac: {
        name: 'Cadillac',
        models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
    },
    chevrolet: {
        name: 'Chevrolet',
        models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
            'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
    },
};

export default class DropdownView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carMake: 'cadillac',
      modelIndex: 3,
            // pickers: [
            //     {        // 顶部Dropdown目录集合
            //         key: '',        // 用于数据请求参数key
            //         value: [
            //             {
            //                 pName: '',    // 数据请求参数value
            //                 name: '',    // 顶部Dropdown标题显示
            //             }
            //         ]
            //     }
            // ],
            // curPickerIndex: 0,  // 当前点击的Dropdown编号
            // selectedValues: [], // 当前每个Dropdown的selectedValue
            // selectedTexts: [],  // 对应上面每个selectedValue的标题内容
            // pickerHeight: new Animated.Value(1),
            // reqData: {},        // 请求数据
            // dataType: '',      // 当前展示的数据字段
            // dataTypeText: '',  // 当前展示的数据字段名称
            // reqParams: {},      // 请求参数
            // newVal: '',        // 暂存修改后的信息
            // newValText: '',
        }
    }
    componentDidMount() {
        this.setState({
            pickers: this.props.dropMenus,
        }, function () {
            var values = [], texts = [];
            const pickers = this.state.pickers;
            for (var i = 0; i < pickers.length; ++i) {
                values.push(pickers[i].value[0].pName);
                texts.push(pickers[i].value[0].name);
            }
            this.setState({
                selectedValues: values,
                selectedTexts: texts,
            }, function () {
                // (this.props.contentType == 'list') ? (this.setParams()) : (this.getData());
            });
        });
    }
    // 处理PickerIOS选择事件
    handlePickerChanged(newVal) {
        // 鉴于state的特性不能直接修改，需要借助中间变量复制数组然后重新使用setState来修改状态
        var curPickerIndex = this.state.curPickerIndex;
        var tempValues = _.clone(this.state.selectedValues),
            tempTexts = _.clone(this.state.selectedTexts);
        const newValText = getNameByPName(newVal, this.state.pickers[curPickerIndex].value);
        tempValues[curPickerIndex] = newVal;
        tempTexts[curPickerIndex] = newValText;
        this.setState({
            selectedValues: tempValues,
            selectedTexts: tempTexts,
            newVal: newVal,
            newValText: newValText,
        }, function () {
        });
    }

    // 不需要发送ajax请求的drop修改处理事件
    //通过修改state中的dataType，来改变传给子组件的props，然后在子组件中修改对应的state来刷新view
    _changeDataType(dataType, dataTypeText) {
        this.setState({
            dataType: dataType,
            dataTypeText: dataTypeText,
        });
    }

    closePicker() {
        if (this.state.pickers[this.state.curPickerIndex].ajaxRequired) {
            // (this.props.contentType == 'list') ? (this.setParams()) : (this.getData());
        } else {
            this._changeDataType(this.state.newVal, this.state.newValText);
        }

        Animated.timing(
            this.state.pickerHeight,
            { toValue: 1 },
        ).start();
    }

    // 处理PickerIOS选择事件
    handlePickerChanged(newVal) {
        // 鉴于state的特性不能直接修改，需要借助中间变量复制数组然后重新使用setState来修改状态
        var curPickerIndex = this.state.curPickerIndex;
        var tempValues = _.clone(this.state.selectedValues),
            tempTexts = _.clone(this.state.selectedTexts);
        const newValText = getNameByPName(newVal, this.state.pickers[curPickerIndex].value);
        tempValues[curPickerIndex] = newVal;
        tempTexts[curPickerIndex] = newValText;
        this.setState({
            selectedValues: tempValues,
            selectedTexts: tempTexts,
            newVal: newVal,
            newValText: newValText,
        }, function () {
        });
    }

    // 不需要发送ajax请求的drop修改处理事件
    // 通过修改state中的dataType，来改变传给子组件的props，然后在子组件中修改对应的state来刷新view
    _changeDataType(dataType, dataTypeText) {
        this.setState({
            dataType: dataType,
            dataTypeText: dataTypeText,
        });
    }

    closePicker() {
        if (this.state.pickers[this.state.curPickerIndex].ajaxRequired) {
            // (this.props.contentType == 'list') ? (this.setParams()) : (this.getData());
        } else {
            this._changeDataType(this.state.newVal, this.state.newValText);
        }

        Animated.timing(
            this.state.pickerHeight,
            { toValue: 1 },
        ).start();
    }

    render() {
    //     var make = CAR_MAKES_AND_MODELS[this.state.carMake];
    // var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    // return (
    //   <View>
    //     <Text>Please choose a make for your car:</Text>
    //     <PickerIOS
    //       selectedValue={this.state.carMake}
    //       onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
    //       {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
    //         <PickerItemIOS
    //           key={carMake}
    //           value={carMake}
    //           label={CAR_MAKES_AND_MODELS[carMake].name}
    //         />
    //       ))}
    //     </PickerIOS>
    //     <Text>Please choose a model of {make.name}:</Text>
    //     <PickerIOS
    //       selectedValue={this.state.modelIndex}
    //       key={this.state.carMake}
    //       onValueChange={(modelIndex) => this.setState({modelIndex})}>
    //       {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
    //         <PickerItemIOS
    //           key={this.state.carMake + '_' + modelIndex}
    //           value={modelIndex}
    //           label={modelName}
    //         />
    //       ))}
    //     </PickerIOS>
    //     <Text>You selected: {selectionString}</Text>
    //   </View>
    // );

return(
    <Picker
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}
  mode="dropdown"
  >
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
);

    // var make = CAR_MAKES_AND_MODELS[this.state.carMake];
    // var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    // return (
    //   <PickerIOS
    //     itemStyle={{fontSize: 25, color: 'red', textAlign: 'left', fontWeight: 'bold'}}
    //     selectedValue={this.state.carMake}
    //     onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
    //     {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
    //       <PickerItemIOS
    //         key={carMake}
    //         value={carMake}
    //         label={CAR_MAKES_AND_MODELS[carMake].name}
    //       />
    //     ))}
    //   </PickerIOS>
    // );
  
        // var handleBtnPressed = this.handleBtnPressed,
        //     mSelf = this;

        // var ContentView = this.props.content;

        // return (
        //     <View style={styles.container}>

        //         <View style={styles.btnGroup}>{
        //             this.state.pickers.map(function (picker, index) {
        //                 return (
        //                     <TouchableHighlight
        //                         style={styles.btnGropuItem}
        //                         underlayColor={'#f1f1f1'}
        //                         key={index}
        //                         // onPress={handleBtnPressed.bind(mSelf, index) } 
        //                         >
        //                         <View style={styles.btnGropuItemContainer}>
        //                             <Text allowFontScaling={false}>{mSelf.state.selectedTexts[index]}</Text>
        //                             <Image style={styles.btnGropuItemIcon} source={{ uri: 'drop-arrow' }} />
        //                         </View>
        //                     </TouchableHighlight>
        //                 )
        //             })
        //         }</View>




        //     </View >
        // )
    }
}

const styles = StyleSheet.create({

})