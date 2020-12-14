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
		const btnContent = (this.props.load) ? 
		(<div className="spinner-border spinner-border-sm text-light" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>)
		: <i className="fas fa-search"></i>;
		return (
			<form className="w-25 mx-auto row" onSubmit={this.handleSubmit}>
			  <div className="form-group col-8">
				  <input type="text" 
					     className="form-control" 
					     id="search" 
					     name="search" 
					     placeholder="What are you looking for?" 
					     required
				         value={this.state.search}
				  	     onChange= {this.handleChange}></input>
			  </div>
			  <button type="submit" 
				      className="btn btn-success col-4">{btnContent}</button>  	
			</form>
		)	
	}
}

export default SearchBar;
