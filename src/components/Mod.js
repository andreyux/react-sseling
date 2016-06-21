import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { emailModal } from '../actions/sendEmail';
import { sendEmail } from '../actions/sendEmail';

class Modal extends Component {
	render() {

		

		if(!this.props.emailModalState){
			return <div></div>;
		}else{
			if(this.props.emailModalState.modalState===true){
				if(this.props.successEmail===true){
					var modalContent = (
							<div className='alert'>Your request has been sent. Thank you!</div>
						);
				}else{
					var modalContent = (
							<div>
								<label for='sales'>Sales person:</label>
								<input id="sales" type='text' className='inputText' value='truman@influitive.com' disabled />
							    <label for='advocate'>Advocate email:</label>
							    <input id="advocate" type='text' className='inputText' value={this.props.emailModalState.aEmail} readOnly />
								<label for='subject'>Subject:<span className='red'>*</span></label>
								<input id="subject" type='text' className='inputText' placeholder='Subject Line' value={this.props.emailModalState.aName+", would you introduce me to "+this.props.emailModalState.publicUser} />
								<label for='body'>Message:<span className='red'>*</span></label>
								<textarea id="body" rows="10" className='inputTextarea'>{this.props.emailModalState.aName+",\n\nI would really appreciate it if you introduce me to your friend "+this.props.emailModalState.publicUser+"!\n\nBest,\nTruman\n\nP.S.\nI have a great offer for both of you!"}</textarea>
								<div className='buttonSubmit' onClick={()=>this.props.sendEmail(this.props.emailModalState.aName, this.props.emailModalState.aEmail, this.props.emailModalState.publicUser)}>Submit Request</div>
							</div>
						);
				}

				return (
					<div className='modalBG'>
						<div className='modalHolder'>
							<div className='modalHeading'>Request Introduction</div>
							<div className='fR'><i className="fa fa-times cursor" aria-hidden="true" onClick={()=>this.props.emailModal(false)}></i></div>
							<div className='clearfix'></div>
							{modalContent}
						</div>
					</div>
				);
			}else{
				return <div></div>;
			}
		}
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({emailModal:emailModal, sendEmail:sendEmail}, dispatch);
}
function mapStateToProps(state){
	return {
		emailModalState: state.emailModal,
		successEmail: state.emailSent
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
