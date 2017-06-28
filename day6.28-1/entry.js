



var React=require('react')
var ReactDOM=require('react-dom')

var Home=require('./js/home.js')
var About=require('./js/about.js')
var Other=require('./js/other.js')
var List=require('./js/list.js')
var List2=require('./js/list2.js')



var Router=require('react-router').Router
var Route=require('react-router').Route
var Link=require('react-router').Link
var IndexRoute=require('react-router').IndexRoute

 var Components=React.createClass({
	render:function(){
		return(
			
			<div>
			
			<h1>路由</h1>
			<p><Link to='/home'>首页</Link></p>
			<p><Link to='/about'>关于</Link></p>
			<p><Link to='/other'>其他</Link></p>
			
			
			<hr/>
			
			
			{this.props.children}
			</div>
			
		)
	}
})




ReactDOM.render(
	<Router>
		<Route path='/' component={Components}>
			<IndexRoute component={Home}/>
			<Route path='/home' component={Home}></Route>
			<Route path='/about' component={About}>
					<Route path='/list/:id' component={List}></Route>
					<Route path='/list2' component={List2}></Route>
			</Route>
			<Route path='/other' component={Other}></Route>
			
		</Route>
	</Router>,document.getElementById('out'))
