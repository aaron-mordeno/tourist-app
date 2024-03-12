import React,{useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('');
    const maxPeopleRef = useRef(1);
    const priceRef = useRef(90);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const maxPeople = maxPeopleRef.current.value;
        const price = priceRef.current.value;

        if(location==='' || maxPeople===0 || price===0) {
            return alert('Location and Max People must be valid');
        }
    }

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
                        <input type='number' placeholder='1' ref={maxPeopleRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form_group form_group_last'>
                    <span>
                        <i class="ri-money-dollar-circle-line"></i>
                    </span>
                    <div>
                        <h6>Price</h6>
                        <input type='number' placeholder='50' ref={priceRef} />
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