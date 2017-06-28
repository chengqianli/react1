var React=require('react')
var Link=require('react-router').Link



var About=React.createClass({
	render:function(){
		return(
			<div>
			
			<h1>嗯呢讷讷</h1>
			<p><Link to='/list/1'>列表一</Link></p>
			<p><Link to='/list/2'>列表二</Link></p>
			<p><Link to='/list/3'>列表三</Link></p>
			{this.props.children}
			</div>
		)
	}
})


module.exports=About;
