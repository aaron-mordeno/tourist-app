import React,{useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

import { BASE_URL } from '../utilities/config.js';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);
    const distanceRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async() => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location==='' || maxGroupSizeRef==='' || distanceRef==='') {
            return alert('Details must be valid');
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if(!res.ok) alert('Something went wrong')

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, 
        {state: result.data})

    };

    return <Col lg='12'>
        <div className='search_bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form_group form_group_first'>
                    <span>
                        <i className='ri-map-pin-line'></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='Where to?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group_first'>
                    <span>
                        <i className='ri-group-line'></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type='number' placeholder='1' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group_last'>
                    <span>
                        <i class="ri-money-dollar-circle-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type='number' placeholder='50' ref={distanceRef} />
                    </div>
                </FormGroup>

                <span className="search_icon submitBtn" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar; 