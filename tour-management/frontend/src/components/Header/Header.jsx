import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'
import './header.css';
import '../../App.css';

const nav_links = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/tours',
        display:'Tours'
    },
];

const Header = () => {
    return <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">

                    {/* logo start */}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    {/* logo end */}

                    {/* menu start */}
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item,index)=>(
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active_link':''}> {item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* menu end */}

                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button className='btn btnLogin'><Link class='btnLink' to='/login'>Login</Link></Button>
                            <Button className='btn btnRegister'><Link class='btnLink' to='/register'>Register</Link></Button>
                        </div>

                        <span className="mobile_menu">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
};

export default Header; 