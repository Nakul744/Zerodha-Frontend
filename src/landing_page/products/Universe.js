import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row text-center text-muted mb-5'>
                <h4>Want to Know more about our technology stack? Cheak out the Zerodha.tech blog</h4>
            </div>
            <div className='row text-center mt-5 p-5'>
                <h3 className='mb-4'>The Zerodha Universe</h3>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mb-5'>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                    <Link to='' className='text-decoration-none'>
                        <img className='img-fluid w-50' alt='Zerodha-Fund-house' src='media\images\zerodhaFundhouse.png'></img>
                        <p className='text-muted mt-2 fs-6'>Our asset management venture <br />that is created simple and transparent index <br />funds to help you save for your goals.</p>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center mt-lg-0 mt-md-0 mt-3'>
                    <Link to='' className='text-decoration-none'>
                        <img alt='sensibull' className='img-fluid w-50' src='media\images\sensibullLogo.svg'></img>
                        <p className='text-muted mt-4 fs-6'>Options trading platform that lets you <br />create strategies, analyze positions and examine<br />data points like open interest, FII/DII, and more.</p>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center mt-lg-0 mt-md-4 mt-3'>
                    <Link to='' className='text-decoration-none'>
                        <img alt='tijori' className='img-fluid w-50' src='media\images\tijori.svg'></img>
                        <p className='text-muted mt-3 fs-6'>Investment research platform<br />that offers detailed insights on stocks,<br />sectors, supply chains, and more.</p>
                    </Link>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                    <Link to='' className='text-decoration-none'>
                        <img alt='tijori' className='img-fluid w-50' src='media\images\streakLogo.png'></img>
                        <p className='text-muted mt-3 fs-6'>Systematic trading platform<br />that allows you to create and backtest <br />strategies without coding.</p>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center mt-lg-0 mt-md-0 mt-3'>
                    <Link to='' className='text-decoration-none'>
                        <img alt='tijori' className='img-fluid w-50' src='media\images\smallcaseLogo.png'></img>
                        <p className='text-muted mt-3 fs-6'>Thematic investing platform <br />that helps you invest in diversified<br />baskets of stocks on EFTs.</p>
                    </Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 text-center mt-lg-0 mt-md-4 mt-3'>
                    <Link to='' className='text-decoration-none'>
                        <img alt='tijori' className='img-fluid w-50' src='media\images\dittoLogo.png'></img>
                        <p className='text-muted mt-3 fs-6'>Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <button className='btn btn-primary p-2 mx-auto mb-5 mt-4' style={{ maxWidth: '200px' }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;