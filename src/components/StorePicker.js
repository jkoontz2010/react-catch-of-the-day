import React from 'react';

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		const storeId = this.storeInput.value;

		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref={(input) => { this.storeInput = input }} required placeholder="Store Name" />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

StorePicker.contextTypes ={
	router: React.PropTypes.object
}

export default StorePicker;