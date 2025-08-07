import React from 'react';
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <>
        <div className='container  border-bottom'>
          <div className='row text-center mt-5 p-5 mb-5 '>
            <h4 className='fs-2'>Zerodha Products</h4>
            <p className=' fs-4 mt-2'>Sleek , modern, and intuitive trading platfroms</p>
            <p className=' '>Check out our <Link className='text-decoration-none' to='/'>investment offerings <i class="fa-solid fa-arrow-right"></i></Link></p>
          </div>
        </div>
        </>
      );
}

export default Hero;