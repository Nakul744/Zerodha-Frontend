import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center mb-5 mb-md-0'>
                    <img
                        src='media\images\largestBroker.svg'
                        alt='Largest stock broker in India award'
                        className='img-fluid'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                <div className='col-12 col-md-6 p-4 p-md-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-4 mb-md-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row mb-5'>
                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li className='mb-2'>Futures and Options</li>
                                <li className='mb-2'>Commodity derivatives</li>
                                <li className='mb-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li className='mb-2'>Stocks & IPOs</li>
                                <li className='mb-2'>Direct mutual funds</li>
                                <li className='mb-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <div className='col-12 mt-4'>
                            <img
                                src='media\images\pressLogos.png'
                                alt='Logos of press mentions like Economic Times, Livemint, Business Standard'
                                className='img-fluid d-block mx-auto'
                                style={{ maxWidth: '90%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;