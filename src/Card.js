import React from 'react';

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			redBtn : true,
			confirm : true
		}
	}

	render(){
		return(
			<div className={this.state.redBtn ? "show" : "hidden"}>
				<div  className='card br1 pa2 ma2 '>
					<div className='flex-container head'>
						<div className='w3'>
							<img className='thumbnail' src={`${this.props.thumbnail_image}`} alt='thumbnail' />
						</div>
						<div className='flex flex-column'>
							 <div><p className=' title' >{this.props.title}</p></div>
							 <div><p className=' artist'>{this.props.artist}</p></div> 
						 </div>
					</div>
					<hr/>
					<div>
						<img src={`${this.props.image}`} alt='thumbnail' />
					</div>
					{this.state.confirm ? 
						<div className='flex justify-between'>
							<button className='red pa2' ref="btn" onClick={() => {this.setState({redBtn:false})}}>Remove</button> 
							<button className='green pa2' onClick={() => {this.setState({confirm:false})}}>Buy Now</button> 
						</div>
						:
						<div className='flex'>
							<a className='confirm pa2' href={`${this.props.url}`}>Confirm</a>
						</div>
					}
				</div>
			</div>
		)
	}
}

export default Card;