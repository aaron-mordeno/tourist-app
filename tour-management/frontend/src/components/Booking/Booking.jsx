import React from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';

const Booking = ({tour}) => {

  const {price, reviews} = tour;

  const handleChange = e => {};

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>per person</span></h3>
      </div>

      {/* booking form start */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form'>
          <FormGroup>
            <input type='text' placeholder='Full name' id='fullname' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id='date' required onChange={handleChange} />
            <input type='number' placeholder='Number of guests' id='guestSize' required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
      {/* booking form end */}
    </div>
  )
};

export default Booking;