var React=require('react')
var $=require('jquery')


var List=React.createClass({
	getInitialState(){
		return{
			res:''
		}
	},
	componentWillReceiveProps:function(a){
		var _this=this
		$.ajax({
			type:'get',
			url:'test1.json',
			dataType:'json',
			success:function(data){			
				console.log(data.title[a.params.id])
				_this.setState({res:data.title[a.params.id]})
			}
		})
	},
	
	
	render:function(){
		
		return(
			<div>
			
			<h1>嗯呢讷讷</h1>
			
		<p>{this.state.res}</p>	
			<h2>{this.props.params.id}</h2>
			</div>
		)
	}
})


module.exports=List;
