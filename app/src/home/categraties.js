import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView
} from 'react-native';

import AjaxUtils from '../component/ajax-utils';
import AJAXURLS from '../urls/ajax-urls';

export default class Categraties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: null
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		var self = this;
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
		AjaxUtils.get(AJAXURLS.getCates, function (json) {
			self.setState({
				dataSource: ds.cloneWithRows(json.data.hot_brand)
			});
		});
	}

	render() {
		let dataSource = this.state.dataSource;
		if (!dataSource) {
			return this.renderLoadingView();
		}

		return this.renderTemplate(dataSource);
	}

	renderLoadingView() {
		return (
			<View style = {styles.loading}>
				<Text>
					Loading...
				</Text>
			</View>
		);
	}

	renderTemplate(dataSource) {
		return (
			<View style={styles.wraps}>  
				<ListView  
					initialListSize={10}
					contentContainerStyle={styles.list}  
					dataSource={dataSource}  
					renderRow={(rowData) =>
						<View style={styles.mItems}>
							<Image source={{uri:rowData.image_src}} style={styles.icons}/>
							<Text style={styles.cate_name}>{rowData.name}</Text>
						</View>}  
				/>
				<View style={styles.more}>
					<Text style={styles.cate_name}>查看更多</Text>  
				</View>
			</View>
       );
	}
}

const styles = StyleSheet.create({
	wraps: {
		borderBottomWidth: 1,  
		borderBottomColor: '#f2f2f2',
		position: 'relative'
	},
	list:{
		justifyContent: 'space-around',  
		flexDirection: 'row',  
		flexWrap: 'wrap'
	},
	mItems: {
		justifyContent: 'center',
		padding: 5,  
		width: 75,  
		height: 60,  
		alignItems: 'center'
	},
	more:{
		position: 'absolute',  
		right:0, 
		bottom:1,
		padding: 5,  
		width: 75,  
		height: 60,  
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#fff'
	},
	icons: {
		height: 30,
		width: 30,
		margin:0
	},
	cate_name:{
		color:'#aaaaaa',
		fontSize:12
	},
	loading: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	}
});