import React from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utilities/avgRating';

const TourDetails = () => {

    const {id} = useParams()

    // PLEASE NOTE
    // This is currently static data.
    // API call to load data from database to be implemented later
    const tour = tourData.find(tour=> tour.id === id);
;
    // De-structure tour object properties
    const {title, location, time, price, maxGroupSize, desc, reviews, photo} = tour;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    return <>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className="tour_content">
                            <img src={photo} alt="" />

                            {/* tour info start */}
                            <div className="tour_info">
                                <h2>{title}</h2>

                                <div className="d-flex align-items-center gap-5">
                                    <span className='tour_rating d-flex align-items-center gap-1'>
                                        <i class="ri-star-line" style={{"color":"var(--primary-color)"}}></i>
                                        {calculateAvgRating === 0 ? null : avgRating} 
                                        {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
                                    </span>

                                    <span>
                                        <i className='ri-map-pin-line'></i> {location}
                                    </span>
                                </div>

                                <div className="tour_extra-details">
                                        <span>
                                            <i class="ri-money-dollar-circle-line"></i> ${price} per person
                                        </span>
                                        <span>
                                            <i class="ri-time-line"></i> {time}
                                        </span>
                                        <span>
                                            <i className='ri-group-line'></i> {maxGroupSize}
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                            </div>
                            {/* tour info end */}

                            {/* reviews section start */}

                            {/* reviews section end */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
};

export default TourDetails; 