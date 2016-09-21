import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Maketing extends Component {
	render() {
		return (
			<View style = {styles.wraps}>
				<View style={styles.mItems}>
					<Image source={require('../images/a1.png') }  style={styles.icons}/>
				</View >
				<View style={styles.mItems}>
					<Image source={require('../images/a2.png') } style={styles.icons}/>
				</View >
				<View style={styles.mItems}>
					<Image source={require('../images/a3.png') } style={styles.icons}/>
				</View >
				<View style={styles.mItems}>
					<Image source={require('../images/a4.png') } style={styles.icons}/>
				</View >
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wraps:{
		height: 100,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	},
	mItems: {
		flex: 1,
		justifyContent:'center', //垂直方向居中
		alignItems: 'center', //左右方向居中
	},
	icons:{
		height: 60,
		width: 60,
	}
});