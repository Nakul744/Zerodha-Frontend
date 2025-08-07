import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Stats() {
    return (
        <div className='container mb-5'>
            <div className='row mt-5 p-3 p-md-5 align-items-center'>
                <div className='col-12 col-md-6 p-3 p-md-5 order-1 order-md-1 mb-5'>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <h2 className='fs-4 mt-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <Link to='/' className='text-decoration-none'>Our philosophies.</Link></p> {/* Replaced <a> with Link */}

                    <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-12 col-md-6 p-3 p-md-5 text-center order-2 order-md-2 mb-5 mb-md-0'>
                    <img
                        alt='Zerodha Ecosystem'
                        src='media\images\ecosystem.png'
                        className='img-fluid'
                        style={{ maxWidth: "90%", height: "auto" }}
                    />
                    <div className='d-flex flex-column flex-sm-row justify-content-center mt-4 gap-3'>
                        <Link to='/' className='text-decoration-none fs-5 fw-bold'> {/* Replaced <a> with Link */}
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to='/' className='text-decoration-none fs-5 fw-bold'> {/* Replaced <a> with Link */}
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;