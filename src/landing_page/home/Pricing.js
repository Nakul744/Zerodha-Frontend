import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Pricing() {
    return (
        <div className='container mb-5 '>
            <div className='row mt-5 mb-5'>
                <div className='col-4 mt-5 mb-5'>
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India Flat fees and no hidden charges.</p>
                    {/* Replaced <a> with Link and href with to */}
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                <div className='col-2 mb-5'></div>

                <div className='col-6 mt-5 mb-5'>
                    <div className='row '>
                        <div className='col p-2 border text-center ' >
                            <h1 className='mb-3 mt-3'> &#8377;0</h1>
                            <p className=''>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-2 border text-center' >
                            <h1 className='mb-3 mt-3'> &#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;