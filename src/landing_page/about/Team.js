import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row '>
                <h3 className='text-center text-muted'>People</h3>
                <div className='col text-center mt-5 p-5'>
                    <img style={{ borderRadius: '60%', width: '55%' }} alt='ceo-logo' src='media\images\nithinKamath.jpg'></img>
                    <h1 className='text-muted mt-4' style={{ fontSize: '20px' }}>Nithin Kamath</h1>
                    <p className='mt-4 text-muted'>Founder,CEO</p>
                </div>
                <div className='col mt-5 ' style={{ paddingTop: '4rem', paddingLeft: '0', marginLeft: '0' }}>
                    <p style={{ fontSize: '20px' }}>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. <br></br><br></br>

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br></br><br></br>

                        Playing basketball is his zen.<br></br> <br></br>

                        Connect on Homepage / TradingQnA / Twitter <br></br> <br></br>
                    </p>
                </div>

            </div>
            <div className='row mt-5'>
                <div className='col-4 text-center text-muted'>
                    <img style={{ borderRadius: '60%', width: '60%' }} cal alt='Nikhil-photo' src='media\images\Nikhil.jpg'></img>
                    <h5 className='mt-3'>Nikhil Kamath</h5>
                    <p> Co-founder & CFO</p>
                 


                </div>
                <div className='col-4 text-center text-muted'>
                    <img alt='Dr-kailesh-Nadh' style={{ borderRadius: '60%', width: '60%' }} src='media\images\Kailash.jpg'></img>
                    <h5 className='mt-3'>Dr.Kailash Nadh</h5>
                    <p>CTO</p>

                </div>
                <div className='col-4 text-center text-muted'>
                    <img alt='Venu-Madhav' style={{ borderRadius: '60%', width: '60%' }} src='media\images\Venu.jpg' ></img>
                    <h5 className='mt-3'>Venu Madhav</h5>
                    <p>COO</p>

                </div>
            </div>
            <div className='row mt-5'>
                
                <div className='col-4 text-center text-muted'>
                    <img alt='Hanan-Delvi' style={{ borderRadius: '60%', width: '60%' }} src='media\images\Hanan.jpg'></img>
                    <h5 className='mt-3'> Hanan Delvi</h5>
                    <p>CCO</p>

                </div>
                <div className='col-4 text-center text-muted'>
                    <img alt='Seema-patil'  src='media\images\Seema.jpg' style={{ borderRadius: '60%', width: '60%' }}></img>
                    <h5 className='mt-3'>Seema Patil</h5>
                    <p>Director</p>

                </div>
                <div className='col-4 text-center text-muted'>
                    <img alt='Karthik-Rangappa' src='media\images\karthik.jpg' style={{ borderRadius: '60%', width: '60%' }}></img>
                    <h5 className='mt-3'>Karthik Rangappa</h5>
                    <p>Cheif of Education</p>

                </div>
            </div>
            <div className='row mt-5 mb-5 '>
                
                <div className='col-4 text-center text-muted'>
                    <img alt='Austin Prakesh' src='media\images\Austin.jpg' style={{ borderRadius: '60%', width: '60%' }}></img>
                    <h5 className='mt-3'> Austin Prakesh</h5>
                    <p>Director Strategy</p>

                </div>

            </div>
        </div>
    );
}

export default Team;