import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div style={{ backgroundColor: '#FBFBFB' }}>
            <div className='container border-top pt-4' style={{ backgroundColor: 'transparent' }}>
                <div className='row mt-4 g-4'>

                    <div className='col-12 col-md-4 col-lg-3 mb-4 mb-md-0 text-center text-md-start'>
                        <img src='media/images/logo.svg' className='img-fluid mb-3 mt-1' alt='Zerodha logo' style={{ maxWidth: "150px" }}></img>
                        <p className='text-muted small'>
                            © {new Date().getFullYear()}, Zerodha Broking Ltd. <br /> All rights reserved.
                        </p>
                        <div className='d-flex justify-content-center justify-content-md-start gap-3 border-bottom pb-3 mt-4'>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-x-twitter fs-4"></i></Link>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-facebook-f fs-4"></i></Link>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-instagram fs-4"></i> </Link>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-linkedin fs-4"></i></Link>
                        </div>
                        <div className='d-flex justify-content-center justify-content-md-start gap-3 pt-3'>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-youtube fs-4"></i></Link>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-whatsapp fs-4"></i></Link>
                            <Link to='/' className='text-decoration-none text-muted link-primary'><i className="fa-brands fa-telegram fs-4"></i></Link>
                        </div>
                    </div>

                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <h4 className='text-muted mb-3 fs-5'>Account</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Open demat account</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Minor demat account</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>NRI demat account</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Commodity</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Dematerialisation</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Fund transfer</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>MTF</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Referral program</Link></li>
                        </ul>
                    </div>

                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <h4 className='text-muted mb-3 fs-5'>Support</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Contact us</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Support portal</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>How to file a complaint?</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Status of your complaints</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Bulletin</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Circular</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Z-Connect blog</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Downloads</Link></li>
                        </ul>
                    </div>

                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <h4 className='text-muted mb-3 fs-5'>Company</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>About</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Philosophy</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Press & media</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Careers</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Zerodha Cares(CSR)</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Zerodha.tech</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Open source</Link></li>
                        </ul>
                    </div>

                    <div className='col-6 col-sm-4 col-md-2 mb-4 mb-md-0'>
                        <h4 className='text-muted mb-3 fs-5'>Quick links</h4>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Upcoming IPOs</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Brokerage charges</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Market holidays</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Economic calendar</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Calculators</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Markets</Link></li>
                            <li className='mb-2'><Link to='/' className='text-decoration-none text-muted link-primary'>Sectors</Link></li>
                        </ul>
                    </div>

                </div>

                <div className='row mt-4'>
                    <div className='col-12 text-muted small'>
                        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to<Link to='/' className='text-decoration-none text-primary'> complaints@zerodha.com </Link>, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    </div>
                </div>

                <div className='row py-3'>
                    <div className='col-12 col-md-10 offset-md-1 '>
                        <div className='d-flex flex-wrap g-2 justify-content-center justify-content-md-start'>
                            <div className='col-auto text-muted '>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>NSE</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>BSE</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>MCX</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>Terms & conditions</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>Policies & procedures</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>Privacy policy</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>Disclosure</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>For investor's attention</Link>
                            </div>
                            <div className='col-auto text-muted'>
                                <Link to='/' className='text-decoration-none text-muted link-primary p-2'>Investor charter</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;