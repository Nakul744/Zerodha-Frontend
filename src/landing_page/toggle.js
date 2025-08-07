import React from 'react';
import { Link } from 'react-router-dom';



function Toggle() {
    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-secondary toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ border: 'none', backgroundColor: 'white', color: 'black' }}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end mt-3 p-3" style={{ width: '100%', minWidth: '750px', right: 0 }}>
                    <div className="row g-2 pb-3 border-bottom">
                        <div className="col-6 col-md-3 text-center p-2">
                            <a href="https://kite-dashboard.vercel.app/login" target="_blank" rel="noopener noreferrer" className="dropdown-item d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
                                <img src="media\images\kite-logo.svg" alt="Kite logo" className="img-fluid mb-2" style={{ maxWidth: '40px' }} />
                                <h6 className="fw-bold mb-0 text-black">Kite</h6>
                                <p className="small text-muted mb-0">Trading platform</p>
                            </a>
                        </div>

                        <div className="col-6 col-md-3 text-center p-2">
                            <Link to="/" className="dropdown-item d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
                                <img src="media\images\console.svg" alt="Console logo" className="img-fluid mb-2" style={{ maxWidth: '40px' }} />
                                <h6 className="fw-bold mb-0 text-black">Console</h6>
                                <p className="small text-muted mb-0">Backoffice</p>
                            </Link>
                        </div>

                        <div className="col-6 col-md-3 text-center p-2">
                            <Link to="/" className="dropdown-item d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
                                <img src="media\images\kite-connect.svg" alt="Kite Connect logo" className="img-fluid mb-2" style={{ maxWidth: '40px' }} />
                                <h6 className="fw-bold mb-0 text-black">Kite Connect</h6>
                                <p className="small text-muted mb-0">Trading APIs</p>
                            </Link>
                        </div>

                        <div className="col-6 col-md-3 text-center p-2">
                            <Link to="/" className="dropdown-item d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
                                <img src="media\images\coin.svg" alt="Coin logo" className="img-fluid mb-2" style={{ maxWidth: '40px' }} />
                                <h6 className="fw-bold mb-0 text-black">Coin</h6>
                                <p className="small text-muted mb-0">Mutual funds</p>
                            </Link>
                        </div>
                    </div>

                    <div className='row g-2 pt-3' style={{ backgroundColor: "#FAFAFB" }} >
                        <div className='col-12 col-sm-6 col-lg-4'>
                            <h5 className='p-2 mb-2'>Utilities</h5>
                            <ul className='list-unstyled '>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>Calculators</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>Brokerage Calculators</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary' >Margin calculator</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>SIP calculator</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-4'>
                            <h5 className='p-2 mb-2'>Updates</h5>
                            <ul className='list-unstyled '>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>Z-Connect blog</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>Circulars/Bulletin</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary' >IPOs</Link></li>
                                <li className='p-1'><Link to='/' className='text-decoration-none text-dark link-primary'>Markets</Link></li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='row g-2 p-1'>
                                <h5 className='mb-2'>Education</h5>
                                <div className='col-6 text-center'>
                                    <Link to='/' className='text-decoration-none text-dark link-primary'>
                                        <img alt='Varsity logo' src="media\images\varsity (1).png" className="img-fluid mb-1" style={{ maxWidth: "60px" }}></img>
                                        <p className="small text-muted mb-0">Varsity</p>
                                    </Link>
                                </div>
                                <div className='col-6 text-center'>
                                    <Link to='/' className='text-decoration-none text-dark link-primary'>
                                        <img src='media\images\tra.png' alt='Trading Q&A logo' className="img-fluid mb-1" style={{ maxWidth: "70px" }}></img>
                                        <p className="small text-muted mb-0">Trading Q&A</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Toggle;