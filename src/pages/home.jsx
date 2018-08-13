import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject( 'homeStore' )
@observer
class Home extends React.Component {

	componentDidMount() {
		this.props.homeStore.getList();
	}

	render() {
		return (
			<div>
				<p>{this.props.homeStore.title}</p>
				<Link to="/about">go to About</Link>

				<div style={{ textAlign: 'left', width: '100%', margin: 'auto' }}>
					<p>下面是列表数据：</p>
					{
						this.props.homeStore.list && this.props.homeStore.list.map( ( el ) => {
							return ( <div key={el.id}>标题：{el.title}</div> )
						} )
					}
				</div>
			</div>
		);
	}
}

export default Home;