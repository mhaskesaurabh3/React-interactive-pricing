import React from 'react';
import PageView from './PageView';
const Pricing = () => {
  return (
    <>
      <div className='bg-offwhite flex justify-center items-center h-72 '>
        <div className='text area'>
          <h4 className='font-bold text-3xl '>
            Simple, traffic-based pricing
            <br />
          </h4>
          <h6 className='font-extralight text-base text-center mt-2'>
            Sign-up for our 30-day trial. No credit card required.
          </h6>
        </div>
      </div>
      <div className='second-sec bg-lightBlue h-screen flex justify-center '>
        <PageView />
      </div>
    </>
  );
};

export default Pricing;
