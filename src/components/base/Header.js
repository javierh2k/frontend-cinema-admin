import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <Link to='/'>
                    <a className="logo">
                        <span className="logo-mini"><b>A</b></span>
                        <span className="logo-lg"><b>Admin</b></span>
                    </a>
                </Link>
                <nav className="navbar navbar-static-top">
                    <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">

                    </div>
                </nav>
            </header>
        )
    }
}