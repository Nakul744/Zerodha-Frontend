import React from 'react';

function Hero() {
    return ( 
        <div className='conatainer'>
            <div className='row mt-5 mb-5 p-5 text-center'>
                <h1> Charges</h1>
                <h3 className='text-muted mt-2'>List of all Charges and taxes</h3>
            </div>
            <div className=' row mt-5 '>
                <div className='col-1'></div>
                <div className='col-3  text-center' style={{marginLeft:'20px'}}>
                    <img src='media\images\pricingEquity.svg' alt='0rs'></img>
                    <h3 className='mt-3 mb-3'>Free equity delivery</h3>
                    <p style={{fontSize:"18px"}}>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-3 text-center' style={{marginLeft:'20px'}}>
                    <img src='media\images\other-trades.svg' alt='20rs'></img>
                    <h3 className='mt-3 mb-3'>Intraday and F&Q</h3>
                    <p style={{fontSize:"18px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br></br>executed order on intraday trades across <br></br>equity, currency, and commodity trades. Flat<br></br> ₹20 on all option trades</p>
                </div>
                <div className='col-3 text-center' style={{marginLeft:'20px'}}>
                    <img src='media\images\pricingEquity.svg' alt='0rs'></img>
                    <h3 className='mt-3 mb-3'>Free direct MF</h3>
                    <p style={{fontSize:"18px"}}>All direct mutual fund investments are<br></br> absolutely free — ₹ 0 commissions & DP <br></br>charges.</p>
                </div>
                <div className='col-1'>
                    
                </div>
            </div>
        </div>
     );
}

export default Hero;