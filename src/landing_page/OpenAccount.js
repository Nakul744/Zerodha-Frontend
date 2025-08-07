import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container text-center py-5 my-5'>
            <h2 className='mb-4 fs-1'>Open Zerodha account</h2>
            <p className='lead text-muted px-3 px-md-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to='/signup' className='btn btn-primary mt-4 d-block mx-auto p-3 ' style={{width:'300px'}}>
                Sign up for free
            </Link>
        </div>
    );
}

export default OpenAccount;