import React from 'react';

class AddFishForm extends React.Component {

	createFish(event) {
		event.preventDefault();
		console.log("gonna make some fiyush!");

		const fish = {
			name: this.name.value,
			pric: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}

		this.props.addFish(fish);
		this.fishForm.reset();
	}

	render() {
		return (
			
			<form ref={(input) => this.fishForm = input } className="fish-edit" onSubmit={(e) => this.createFish(e)}>
				<input type="text" ref={(input) => this.name = input } placeholder="Fish Name" />
				<input type="text" ref={(input) => this.price = input }placeholder="Fish Price" />
				<select ref={(input) => this.status = input }>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => this.desc = input } placeholder="Fish Desc" />
				<input ref={(input) => this.image = input } type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Item</button>
			</form>
			
		)
	}
}

export default AddFishForm;