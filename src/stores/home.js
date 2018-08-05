import { observable } from 'mobx';
import HomeApi from 'api/home';

const HomeStore = observable( {
	title: 'this is home page',
	list: [],

	// 获取首页数据
	async getList() {
		this.list = await HomeApi.getList();
	}
} );

export default HomeStore;