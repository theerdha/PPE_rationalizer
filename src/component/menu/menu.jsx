import React, { Component } from 'react';
import './menu.css'
import './menu-alt.css'
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';


class Menubar extends Component{
    constructor (props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    render() {
        return(
            <Nav className='Menu col-md-12 d-none d-md-block sidebar'>
                <Nav.Item id='nav-items'>
                    <NavLink exact id="nav-item" to="/" activeStyle={{ color: "red" }} >
                        {/*<i className="fa fa-home" aria-hidden="true"/>*/}
                        <span style={{fontWeight:'bold'}}>HOME</span>
                    </NavLink>
                </Nav.Item>
                <Nav.Item id='nav-items'>
                    <NavLink id="nav-item" to="/demand" activeStyle={{ color: "red" }}>
                    {/*<i className="fa fa-list-alt" aria-hidden="true"/>*/}
                    <span>DEMAND</span>
                    </NavLink>
                </Nav.Item>
                <Nav.Item id='nav-items'>
                    <NavLink id="nav-item" to="/ConsumeLogs" activeStyle={{ color: "red" }}>
                    {/*<i className="fa fa-file-text-o" aria-hidden="true"/>*/}
                    <span style={{textAlign:'left'}}>LOGS</span>
                    </NavLink>
                </Nav.Item>
                <Nav.Item id='nav-items'>
                    <NavLink id="nav-item" to="/history" activeStyle={{ color: "red" }}>
                    {/*<i className="fa fa-file-text-o" aria-hidden="true"/>*/}
                    <span style={{textAlign:'left'}}>HISTORY</span>
                    </NavLink>
                </Nav.Item>
                <Nav.Item id='nav-items'>
                    <NavLink id="nav-item" to="/Logout" activeStyle={{ color: "red" }}>
                    {/*<i className="fa fa-file-text-o" aria-hidden="true"/>*/}
                    <span style={{textAlign:'left'}}>LOGOUT</span>
                    </NavLink>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Menubar;