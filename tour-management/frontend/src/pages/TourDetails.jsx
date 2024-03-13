import React, {useRef, useState} from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utilities/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

const TourDetails = () => {

    const {id} = useParams();
    const reviewMsgRef = useRef('');
    const [tourRating, setTourRating]=useState(null);

    // PLEASE NOTE
    // This is currently static data.
    // API call to load data from database to be implemented later
    const tour = tourData.find(tour=> tour.id === id);

    // De-structure tour object properties
    const {title, location, time, price, maxGroupSize, desc, reviews, photo} = tour;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    // Submit request to the server
    const submitHandler = e=>{
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        alert(`${reviewText}, ${tourRating}`);

        // Will implement API call later
    }

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
                                <div className="tour_reviews mt-5">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>

                                    <Form onSubmit={submitHandler}>
                                        <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                                            <span onClick={() => setTourRating(1)}>
                                                1 <i class="ri-star-s-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(2)}>
                                                2 <i class="ri-star-s-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(3)}>
                                                3 <i class="ri-star-s-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(4)}>
                                                4 <i class="ri-star-s-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(5)}>
                                                5 <i class="ri-star-s-fill"></i>
                                            </span>
                                        </div>

                                        <div className="review_input">
                                            <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                                            <button className="btn primary_btn text-white submit-btn" type="submit" >
                                                <span class="submit-btn-text">Submit</span>
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className='user_reviews'>
                                        {
                                            reviews?.map(review=>(
                                                <div className="review_item">
                                                    <img src={avatar} alt="" />

                                                    <div className="w-100">
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>{review.name}</h5>
                                                                <p>13 March 2024</p>
                                                            </div>
                                                            <span>
                                                                {review.rating}<i class="ri-star-s-fill review_icon"></i>
                                                            </span>
                                                        </div>
                                                        <h6>
                                                            {review.review}
                                                        </h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>
                            {/* reviews section end */}
                        </div>
                    </Col>

                    <Col lg="4">
                        <Booking tour={tour} />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
};

export default TourDetails; 