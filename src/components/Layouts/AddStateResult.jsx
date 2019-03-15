import React, { Component } from 'react';
<<<<<<< HEAD
=======
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addState} from '../../actions/displayStateResultsAction.js'
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28

class AddStateResult extends Component {

  render() {
<<<<<<< HEAD

    return (
    	<div>
        <form onSubmit={this.props.handleSubmit} className="form-group">
        	<br />
        	<h3 className="well">Add State</h3>
        		<label>Name of State: </label>
        		<select onChange={this.props.handleChange} name='nameofstate' className="dropdown">
=======
    return (
    	<div class="container">
        <form onSubmit={this.props.handleSubmit}>
        	<br />
        	<h2>Add State</h2>
            <div class="form-group">
        		<label for="nameofstate">Name of State: </label>
        		<select class="form-control" onChange={this.props.handleChange} name='nameofstate' value={this.props.nameofstate}>
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
					<option value=''>-- Please select a state --</option>
					<option value='Abia'>Abia State</option>
					<option value='Akwa-Ibom'>Akwa Ibom State</option>
					<option value='Anambra'>Anambra State</option>
					<option value='Benue'>Benue State</option>
				</select>
<<<<<<< HEAD
=======
            </div>
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
				<br />
				<p><input type='text' placeholder='Please enter APC votes' name='apcVotes' onChange={this.props.handleChange} /></p>
				<p><input type='text' placeholder='Please enter PDP votes' name='pdpVotes' onChange={this.props.handleChange} /></p>
				<br />
<<<<<<< HEAD
				<input type="submit" className="btn btn-primary" value="Collate" />
=======
				<input type="submit" value="Collate" />
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
        </form>


        </div>
    )
    }
}
    
<<<<<<< HEAD

 export default AddStateResult;
=======
AddStateResult.propTypes={
    addState: PropTypes.func.isRequired
}

 export default connect(null, {addState})(AddStateResult);
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
