import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick_links = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/tours',
        display:'Tours'
    },
];

const quick_links2 = [
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    
                            <div className="social_links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer_link-title'>Discover</h5>
                        <ListGroup className='footer_quick-links'>
                            {
                                quick_links.map((item, index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer_link-title'>Quick Links</h5>
                        <ListGroup className='footer_quick-links'>
                            {
                                quick_links2.map((item, index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className='footer_link-title'>Contact</h5>
                        <ListGroup className='footer_quick-links'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    Email:
                                </h6>
                                <p className='mb-0'>tourhk@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-phone-line"></i></span>
                                    Phone:
                                </h6>
                                <p className='mb-0'>+852 2345 6789</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className='text-center pt-5'>
                        <p className="copyright">
                            Copyright 2024 - UOW BCS '24 Group 3
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer; 