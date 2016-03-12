import React, { Component, PropTypes } from 'react';

let MAX_LENGTH = 80;
let stringMaxLengthType = (props, propName, componentName) => {
	if (props[propName]) {
		let value = props[propName];
		if ('string' !== typeof value || 80 < value.length) {
			// EcmaScript 6 format
			// return new Error(
			// 	 '${propName} in ${componentName} is longer than 80 characters'
			// );
			return new Error(
				propName + ' in ' + componentName + ' is longer that 80 characters.'
			);
		}
	}
}

class Hello extends Component {
	trimString(aString) {
		if (aString.length > MAX_LENGTH) {
			var trimmed = aString.substring(0, MAX_LENGTH);
			return trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndefOf(' '))) + '…';
		}

		return aString;
	}
	render() {
		let helloTitle = this.trimString(this.props.title);
		let helloDescription = this.trimString(this.props.description);
		return (
			<div>
				<h1 title={this.props.title}># Hello, {helloTitle}</h1>
				<p>{helloDescription}</p>
			</div>
		);
	}
}

Hello.propTypes = {
	title: stringMaxLengthType,
	description: stringMaxLengthType
};

export default Hello;
