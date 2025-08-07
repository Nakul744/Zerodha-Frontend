import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported

function Education() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row my-5 align-items-center mt-5'>
                <div className='col-12 col-md-6 mt-2 mt-md-5 text-center mb-5 mb-md-0 mr-5'>
                    <img
                        src='media\images\education.svg'
                        alt='Open market education platform'
                        className='img-fluid'
                        style={{ width: '70%' }}
                    />
                </div>
                <div className='col-12 col-md-6 mt-5 mb-5 mt-md-5 text-center text-md-start ml-5'>
                    <h1 className='mb-4 fs-2 fs-md-1'>Free and open market education</h1>
                    <p className='mb-3 lead'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <Link to="/" className='text-decoration-none fs-5 fw-bold text-primary'>
                        Varsity<i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>

                    <p className='mb-3 mt-4 lead'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <Link to='/' className='text-decoration-none fs-5 fw-bold text-primary'>
                        TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Education;