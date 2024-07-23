import { SetStateAction, useState } from 'react';

export default function Pricing() {
    const [selectedUpfrontCost, setSelectedUpfrontCost] = useState('');
    const [onsiteSupport, setOnsiteSupport] = useState(false);

    const handleUpfrontCostChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedUpfrontCost(e.target.value);
    };

    const handleOnsiteSupportChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setOnsiteSupport(e.target.checked);
    };

    const handleBuyNow = () => {
        // Handle the buy now logic here
        console.log('Buy Now Clicked');
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
                                        <input
                                            type='radio'
                                            id='upfront1'
                                            name='upfrontCost'
                                            value='$199/kit/location'
                                            onChange={handleUpfrontCostChange}
                                            checked={selectedUpfrontCost === '$199/kit/location'}
                                        />
                                        <label htmlFor='upfront1'>
                                            <b>$199/kit/location</b>
                                            <div>Startup Kit + Phone Install Support + 1st Month Free Service</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type='radio'
                                            id='upfront2'
                                            name='upfrontCost'
                                            value='$100/kit/location'
                                            onChange={handleUpfrontCostChange}
                                            checked={selectedUpfrontCost === '$100/kit/location'}
                                        />
                                        <label htmlFor='upfront2'>
                                            <b>$100/kit/location</b>
                                            <div>Site Visit and Installation Service (Atlanta Only)</div>
                                        </label>
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
                                    <li>
                                        <input
                                            type='checkbox'
                                            id='monthly3'
                                            name='twenty'
                                            onChange={handleOnsiteSupportChange}
                                            checked={onsiteSupport}
                                        />
                                        <label htmlFor='monthly3'>
                                            <b>$20/month/TV <i>(optional)</i></b>
                                            <div>Onsite Support and Service and Portal Management</div>
                                        </label>
                                    </li>
                                </ul>
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
