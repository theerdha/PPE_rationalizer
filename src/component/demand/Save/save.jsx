import React, { Component } from "react";
import "./save.css";
import Button from "react-bootstrap/Button";

class Save extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
	    return(
	    		<div className='button-container'>
							<Button variant='light'> Save </Button>
	    		</div>
        )
	}
}
export default Save;
