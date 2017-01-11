import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
	handelFormSubmit({ email, password }){
		console.log(email, password);
		//need to do something to log user in
	}
	render() {
		const { handelSubmit, fields: {email, password}} = this.props;
		return (
			<form onSubmit={handelSubmit(this.handelFormSubmit.bind(this))}>
				<fieldset className='form-group'>
					<label>Email:</label>
					<input className='form-control' {...email}/>
				</fieldset>
				<fieldset className='form-group'>
					<label>Password:</label>
					<input className='form-control' {...password}/>
				</fieldset>
				<button action='submit' className='btn btn-primary'>Sign in</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);