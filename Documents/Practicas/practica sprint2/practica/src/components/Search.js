import React, { useEffect, useState } from 'react';
import useForm from '../Hooks/useForm';
import GetByName from './GetSelect.js/GetByName';
import { Card, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string'


const Search = () => {

    const [clear, setClear] = useState([])

    const navigate = useNavigate()

    const location = useLocation()

    const {q= ''} = querystring.parse(location.search)
    console.log(q)

    const [values, handleInputChange, reset] = useForm({
        search : q
    })

    const {search} = values
   
    const filterName = GetByName(search)
    console.log(filterName)
    
    

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`?q=${search}`)
        console.log('Dentro de handleSub', search)
        
        reset()
    }

    return (
        <div>
        
            <h1>Search Movies</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder="Search"
                    autoComplete='search'
                    name='search'
                    onChange={handleInputChange}
                   
                />
            </form>
            <div>  
                 <center>
                <h1>Results</h1>
                
                <hr />
               
                {
                    filterName.map(item=> (
                        <Col key={item.id}>
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))
                }
                </center>
            </div>
            
        </div>
    );
};

export default Search;