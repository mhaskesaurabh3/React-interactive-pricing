// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Pricing.css';
import { FaCheck } from 'react-icons/fa';

const PageView = () => {
  const [pageVal, setPageVal] = useState(0);
  const [toggleCheck, setToggleCheck] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState([]);

  const handleChange = (e) => {
    const inputVal = e.currentTarget.value;
    setPageVal(inputVal);
  };

  const handleCheckbox = (e) => {
    let checkVal = e.target.checked;
    setToggleCheck(checkVal);
    let discount = 25;
    let arr = priceForView;
    // var updatedPrice = [];
    console.log(updatedPrice);
    for (let i = 0; i < arr.length; i++) {
      let bill = arr[i];
      let reducedVal = bill - (bill * discount) / 100;
      arr[i] = Math.floor(reducedVal);
      updatedPrice.push(arr[i]);
    }
  };

  const pageViews = ['10', '50', '100', '500', '1000'];
  const priceForView = ['8', '12', '16', '24', '36'];
  // console.log(pageViews);

  return (
    <div className='bg-white -mt-14 pricing-card shadow-md'>
      <div className='flex justify-between'>
        <div className='text-base text-center mt-10 ml-5 text-lightGrey font-normal tracking-wider	'>
          {/* {pageViews.at(-1) ? (
            <div>
              <span>{pageViews[pageVal]}M</span> PAGEVIEWS
            </div>
          ) : (
            <div>
              <span>{pageViews[pageVal]}K</span> PAGEVIEWS
            </div>
          )} */}
          <span>{pageViews[pageVal]}K</span> PAGEVIEWS
        </div>
        <div className='font-extralight text-base text-center mt-8 mr-5 text-lightGrey'>
          <span className='font-bold text-3xl text-black'>
            {!toggleCheck ? (
              <div className='inline'> ${priceForView[pageVal]}</div>
            ) : (
              <div className='inline'> ${updatedPrice[pageVal]} </div>
            )}
          </span>
          /month
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <input
          type='range'
          name='range'
          min='0'
          max='4'
          // value='10'
          defaultValue={pageVal}
          step='1'
          className='slider'
          list='tick-list'
          id='myRange'
          onInput={handleChange}
        />
        <datalist id='tick-list'>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </datalist>
      </div>
      <div className='flex justify-center items-center mt-14'>
        <div className='text-base text-center text-lightBlack  font-normal tracking-wide relative right-3	'>
          Monthly Billing
        </div>
        <div className='switch-box'>
          <label className='switch'>
            <input
              type='checkbox'
              value={toggleCheck}
              onChange={handleCheckbox}
            />
            <span className='toggle round'></span>
          </label>
        </div>
        <div className='yearly-bill-sec'>
          <div className='text-base text-center text-lightBlack font-normal tracking-wide relative left-3'>
            Yearly Billing
            <span className=' bg-lightOrange text-darkOrange relative left-5 h-8'>
              25% discount
            </span>
          </div>
        </div>
      </div>
      <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700 w-full mt-16 bg-dividerColor' />
      <div className='footer-sec mt-5 flex justify-between '>
        <div className='icon-with-text inline '>
          <h6 className='text-lightBlack relative left-8 '>
            <FaCheck className='inline relative right-2 text-lightGreen' />
            Unlimited websites
          </h6>
          {/* <FontAwesomeIcon icon='fa-solid fa-check' /> */}
          <h6 className='text-lightBlack relative left-8 inline '>
            <FaCheck className='inline relative right-2 text-lightGreen' />
            100% data ownership
          </h6>
          <h6 className='text-lightBlack relative left-8 '>
            <FaCheck className='inline relative right-2 text-lightGreen' />
            Email reports
          </h6>
        </div>
        <div className='button-bottom relative top-3 right-10'>
          <button className='bg-buttonColor text-white pt-2 pb-2 pl-9 pr-9 rounded-2xl'>
            Start my trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageView;
