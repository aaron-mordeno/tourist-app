import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../shared/CommonSection';

import '../styles/tour.css';
import tourData from '../assets/data/tours';
import SearchBar from './../shared/SearchBar';
import TourCard from './../shared/TourCard';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Tours = () => {

    return (
        <>
            <CommonSection title={'All Tours'}/>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <SearchBar />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {tourData?.map(tour=> (
                            <Col lg='3' className='mb-4' key={tour.id}>
                                <TourCard tour={tour}/>
                            </Col>
                        ))}

                        <Col lg='12'></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Tours; 