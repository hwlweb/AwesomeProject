import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';

import AjaxUtils from '../component/ajax-utils';
import AJAXURLS from '../urls/ajax-urls';
import ActivityScreen from '../activity/activity_screen'

export default class HotActivity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: null
		};
	}

	/**
   * 给Navigator传递参数.
   * @param name 参数
   * @private
   */
	_navigate(name, type = 'Normal', url) {
		this.props.navigator.push({
			component: ActivityScreen,
			passProps: {
				name: name,
				url: 'http://www.kuaiqiangche.com' + url
			},
			type: type
		})
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		var self = this;
		AjaxUtils.get(AJAXURLS.hotActivity, function (json) {
			self.setState({
				dataSource: json.data
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
		let self = this;
		let imgList = dataSource.map(function (items, key) {
			return (
				<View style={styles.mItems} key={key}>
					<TouchableHighlight
                        style={{ backgroundColor: '#f2f2f2', height: 35 }}
                        onPress={() => self._navigate(items.title, 'normal', items.url) }
                        {...self.props}
                        underlayColor="white">
                        <Image source={{ uri: items.image_src }} style={styles.img}/>
                    </TouchableHighlight>
					<View style={styles.name_tips}>
						<Text style={styles.cate_name}>{items.title}</Text>
						<Text style={[styles.cate_name, styles.slogan]}>{items.slogan}</Text>
					</View>
				</View>
			)
		});

		return (
			<View>
				{imgList}
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
	mItems: {
		marginBottom: 10,
		position: 'relative'
	},
	img: {
		height: 200
	},
	cate_name: {
		color: '#fff',
		fontSize: 14,
		height: 30,
		lineHeight: 24
	},
	slogan: {
		color: '#ff6c40',
		marginLeft: 10
	},
	name_tips: {
		width: 400,
		height: 30,
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		bottom: 0,
		left: 0,
		backgroundColor: '#000',
		opacity: 0.75
	},
	loading: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	}
});