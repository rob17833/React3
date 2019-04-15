// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
	constructor(props) {
		super(props);
		this.state = {/*recuperer la propriete true(la variable existe) de la variable on dans App.js pour le state*/
		  on: props.on
		};
	}
	handleClick = () => {
	  console.log('Button clicked');/*renvoie l oppose de la valeur initiale a state, sur clic state devient false*/
	  this.setState({ on: !this.state.on });
	};
	render() {
		const light = this.state.on ? 'on' : 'off';/*donne une chaine de caractere 'on' ou 'off' a light*/
		return (
			<div className="Lamp">
			<button
			onClick={this.handleClick}
			className={light}/*attribue une chaine de caractere 'on' ou 'off' a className*/
			>
			{light.toUpperCase()}
			</button>
			<figure className={light}/*recuperer */ />
			</div>
			);
	}
}

export default Lamp;