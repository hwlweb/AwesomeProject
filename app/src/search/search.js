import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView
} from 'react-native';

import DropdownView from './dropdownView';
import dropdownMenus from '../config/DropdownViewConfig';

import Dropdown from '../component/dropdown';

const dropMenus = [dropdownMenus.platform, dropdownMenus.date];

export default class Search extends Component{
    render(){
        return(
            <View>
                <Dropdown dropMenus={dropMenus}/>
            </View>
        )
    }
} 

const styles = StyleSheet.create({

})