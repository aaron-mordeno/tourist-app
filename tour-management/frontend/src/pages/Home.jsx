import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg01 from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroImg03 from '../assets/images/hero-img03.jpg';
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import FeaturedToursList from '../components/Featured-Tours/FeaturedToursList';

const Home = () => {

    return <>
    
    {/* hero section start */}
        <section>
            <Container>
                <Row className='align-items-center'>
                    <Col lg='6'>
                        <div className="hero_content">
                            <div className="hero_subtitle align-items-center">
                                <h1>Welcome to Hong Kong</h1>
                                <p>A vibrant city where East truly meets West! From the iconic skyline of Victoria Harbour to the bustling streets of Mong Kok, Hong Kong offers a kaleidoscope of experiences for every traveler. Discover the breathtaking beauty of Lantau Island or take a tram ride to Victoria Peak for panoramic views of the city. With its rich cultural heritage, delectable cuisine, and awe-inspiring attractions, Hong Kong is a destination that will captivate your senses and leave you with memories to cherish forever. Come and experience the enchantment of Hong Kong – an adventure like no other awaits!</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className='hero_img-box'>
                            <img src={heroImg01} alt="IFC" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero_img-box mt-3'>
                            <img src={heroImg02} alt="Temple Street" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero_img-box mt-5'>
                            <img src={heroImg03} alt="Ngong Ping Buddha" />
                        </div>
                    </Col>

                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/* hero section end */}

        {/* featured tours section start */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2 className="featured_tours-title">Our Featured Tours</h2>
                    </Col>
                    <FeaturedToursList />
                </Row>

                <Link to={`/tours`} class='see_all_link'>See All Tours</Link>
            </Container>
        </section>
        {/* featured tours section end */}

    </>;
};

export default Home; 