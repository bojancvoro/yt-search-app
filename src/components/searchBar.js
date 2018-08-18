import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" }
        this.onInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        const term = e.target.value;
        this.props.handleInputChange(term);
    }

    render() {
        return (
            <input onChange={this.handleInputChange} />
        )
    }
}

export default SearchBar;