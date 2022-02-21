import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1> Let's book {bedType} Room.</h1>
            <p> Want a <Link to="/home">Different Room</Link></p>
            
        </div>
    );
};

export default Book;