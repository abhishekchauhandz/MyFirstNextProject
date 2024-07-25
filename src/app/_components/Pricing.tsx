import React, { useState, ChangeEvent } from 'react';

export default function Pricing() {
    const [units, setUnits] = useState<number>(1);

    const handleBuyNow = () => {
        // Handle the buy now logic here
        console.log('Buy Now Clicked with units:', units);
        setUnits(1)
    };

    const handleUnitsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = value ? Number(value) : 0;
        if (!isNaN(numericValue)) {
            setUnits(numericValue);
        }
    };


    return (
        <section id='pricing' className='padd-section text-center'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title text-center my-2'>
                    <h2>Meet With Price</h2>
                </div>
                <div className='row' data-aos='fade-up' data-aos-delay='100'>
                    <div className='col-12'>
                        <div className='block-pricing'>
                            <div className='pricing-table'>
                                <h4>Upfront Costs</h4>
                                <ul className='pricing-list'>
                                    <li>
                                        <b>$199/kit/location</b>
                                        <div>Startup Kit + Phone Install Support + 1st Month Free Service</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='pricing-table'>
                                <h4>Monthly Costs (no contracts, cancel anytime)</h4>
                                <ul className='pricing-list'>
                                    <li>
                                        <b>$99/month/TV</b>
                                        <div>Unlimited Slides/Portal Access and Monthly Service</div>
                                    </li>
                                    <li>
                                        <b>FREE</b>
                                        <div>Lifetime Warranty on Hardware and Unlimited Phone Support</div>
                                    </li>
                                </ul>
                            </div>
                            <div className='units-input'>
                                <label htmlFor='units'>No of Units:</label>
                                <input
                                    type='number'
                                    id='units'
                                    name='units'
                                    min='1'
                                    value={units}
                                    onChange={handleUnitsChange}
                                />
                            </div>
                            <div className='table_btn'>
                                <a href='#' className='btn' onClick={handleBuyNow}>
                                    <i className='bi bi-cart'></i> Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
