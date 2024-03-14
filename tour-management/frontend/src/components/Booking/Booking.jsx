import React, {useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({tour}) => {

  const navigate = useNavigate();

  const {price, reviews} = tour;
  const serviceCharge = tour.price / 10;
  const totalPrice = tour.price + serviceCharge;

  const [credentials, setCredentials] = useState (
    {
      userId: '01', // Dynamic implementation to be done later
      userEmail: 'example@gmail.com',
      guestSize: 1,
      bookAt: ''
    }
  )

  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  // send data to server
  // to be implemented later, currently a placeholder
  const handleClick = e => {
    e.preventDefault();

    navigate('/thank-you');
  }

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>per person</span></h3>
      </div>

      {/* booking form start */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type='text' placeholder='Full name' id='fullname' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id='date' required onChange={handleChange} />
            <input type='number' placeholder='Guests' id='guestSize' required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
      {/* booking form end */}

      {/* booking bottom section */}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5>Price per Person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>10% Service Charge</h5>
            <span>${serviceCharge}</span>
          </ListGroupItem>
          <ListGroupItem className='total border-0 px-0'>
            <h5>Total Price</h5>
            <span>${totalPrice}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}><span className='book_btn'>Book Now</span></Button>
      </div>

    </div>
  )
};

export default Booking;