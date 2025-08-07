import React from 'react';

function Borkerage() {
    return (
        <div className='container border-top mb-5 mt-5'>
            <div className='row mt-5'>
                <div className='col-lg-7 col-md-12'>
                    <div className='row mt-5 mb-4 text-center text-lg-start'>
                        <h4>Brokerage calculator</h4>
                    </div>
                    <div className='row mt-4'>
                        <ul>
                            <li className='text-muted mb-2'>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order. </li>
                            <li className='text-muted mb-2'>Digital contract notes will be sent via r-mail.</li>
                            <li className='text-muted mb-2'>Physical copies of contract notes,if required,shall be charged ₹20 per contract note. Courier charges apply. </li>
                            <li className='text-muted mb-2'>For NRI account (non-PIS),0.5% or ₹100 per executedd order for equity(whichever is lower).</li>
                            <li className='text-muted mb-2'>For NRI account (PIS),0.5% or ₹200 per executed order for equity(whichever is lower).</li>
                            <li className='text-muted mb-2'>If the account is in debit balance ,any order placed will be charged ₹40 per executed order instead of ₹20 per execcuted order.</li>
                        </ul>
                    </div>

                </div>
                <div className='col-lg-5 col-md-12 mt-5 text-center'>
                    <div className='row'>
                        <h4>List of charges</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Borkerage;