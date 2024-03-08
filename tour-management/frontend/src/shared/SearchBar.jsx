import React from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
    return <Col lg='12'>
        <div className='search_bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i className='ri-map-pin-line'></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='Where to?' />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                        <i className='ri-group-line'></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type='text' placeholder='1' />
                    </div>
                </FormGroup>
            </Form>
        </div>
    </Col>
};

export default SearchBar; 