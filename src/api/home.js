import axios from 'axios';

export default {

	/**
	 * 获取首页列表页数据
	 * @returns {Promise.<*>}
	 */
	async getList(){
		return await axios.get( 'http://lemonof.com:82/api/getList' ).then( ( res ) => res.data.data );
	}
}