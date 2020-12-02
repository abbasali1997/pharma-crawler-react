import React, {Component} from 'react';

class SearchBar extends Component {
	static defaultProps = {
		onSave() {}
	}
	constructor(props){
		super(props);
		this.state = {
			search: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit (e) {
		e.preventDefault();
		this.props.onSave(this.state.search);
		this.setState({search: ''});
	}
	render() {
		return (
			<form className="w-25 mx-auto d-flex justify-content-center align-items-start" onSubmit={this.handleSubmit}>
			  <div className="form-group">
				  <input type="text" 
					     className="form-control w-auto" 
					     id="search" 
					     name="search" 
					     placeholder="What are you looking for?" 
					     required
				         value={this.state.search}
				  	     onChange= {this.handleChange}></input>
			  </div>
			  <button type="submit" 
				      className="btn btn-primary ml-3">Search</button>  	
			</form>
		)	
	}
}

export default SearchBar;
