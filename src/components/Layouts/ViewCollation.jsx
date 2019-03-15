import React, {Component} from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28

class ViewCollation extends Component{

render(){
	return(
		<div>
			<button onClick={this.props.viewCollation}>View Collated Results</button>
<<<<<<< HEAD
			<Link to='/viewresults'>View collated results</Link>
=======
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
		</div>
		)
	}
}

export default ViewCollation;