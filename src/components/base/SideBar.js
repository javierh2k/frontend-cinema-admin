import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="" />
                        </div>
                        <div className="pull-left info">
                            <p>Javier Holguin</p>
                            <a ><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li >
                            <Link to='/movies'>
                                <i className="fa fa-files-o"></i>
                                <span>Movies</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">new</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/theaters'>
                                <i className="fa fa-th"></i> <span>Theaters</span>
                                <span className="pull-right-container">
                                <small className="label pull-right bg-green">new</small>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}
