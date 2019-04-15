import React, {Component} from 'react';
import logo from "./logo.svg";




class Logo extends Component {
	constructor(props){
		super(props);
		this.state = {//recupere la valeur true de la variable dans App.js
			working: props.working
		};
	}
	handleClick = () => {
	  this.setState({ working: !this.state.working });/*change la valeur de true a false sur click*/
	};
	render() {
		const reverse = this.state.working ? 'working' : 'not-working';
		return (
			<div>
				<img src={logo} className={reverse} alt="logo" />
				<div className="Button">
					<button
					onClick={this.handleClick}
					className={reverse}
					>
					{reverse.toUpperCase()/*libelle bouton*/}
					</button>
				
				</div>
			</div>
		);
	}
}







export default Logo;