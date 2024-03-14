import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css'

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="thank_you">
              <span>
                <h1 className='mb-3 fw-semibold'>Thank you!</h1>
                <h3 className='mb-4'>Your tour has been booked.</h3>

                <Button className='btn primary_btn w-25'>
                  <Link to='/home' className='btnLink'>Back to Homepage</Link>
                </Button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYou;