import React, {Component} from 'react'
<<<<<<< HEAD
import Datasource from '../Datasource.jsx'


class DisplayStateResults extends Component{
	
	// componentWillReceiveProps() {
	// 	stateVote.reduce((currentSum) => {
	// 	return currentSum + state.apcVotes
	// 	}, 0)
	// }

	// componentWillReceiveProps() {
	// 	var currentSum=this.props.apcVotes
	// 	Sum=Sum+currentSum


	// 	var sum=0
	// 	sum=sum+this.props.apcVotes
	// 	console.log(sum)
	// }

=======

class DisplayStateResults extends Component{
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28


render(){
	return(
		<div>
<<<<<<< HEAD
		    <table className="table table-hover table-bordered table-striped">
=======
		    <table className="table table-bodered">
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
			    <tbody>
				    <tr>
					    <td width='100'>{this.props.name}</td>
					    <td width='50'>{this.props.apcVotes}</td>
					    <td width='50'>{this.props.pdpVotes}</td>
					</tr>
			    </tbody>
		    </table> 
    </div>
		)
	}
}

export default DisplayStateResults;