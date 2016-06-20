import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { emailModal } from '../actions/index';
import { sendEmail } from '../actions/sendEmail';

class Modal extends Component {
	render() {
		if(this.props.emailModalState===true){
			return (
				<div className='modalBG'>
					<div className='modalHolder'>
						<div className='modalHeading'>Request Introduction</div>
						<div className='fR'><i className="fa fa-times" aria-hidden="true" onClick={()=>this.props.emailModal(false)}></i></div>
						<div className='clearfix'></div>
						<input type='text' className='inputText' value='truman@influitive.com' disabled />
					    <input type='text' className='inputText' value='amy@influitive.com' disabled />
						<input type='text' className='inputText' placeholder='Subject Line' />
						<textarea  className='inputTextarea'></textarea>
						<div className='buttonSubmit' onClick={()=>this.props.sendEmail(false)}>Submit Request</div>
					</div>
				</div>
			);
		}else{
			return <div></div>;
		}
		
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({emailModal:emailModal, sendEmail:sendEmail}, dispatch);
}
function mapStateToProps(state){
	return {
		emailModalState: state.emailModal
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
