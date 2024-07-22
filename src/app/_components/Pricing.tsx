export default function Pricing() {
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
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                    <li>
                                        <b>$100/kit/location</b>
                                        <div>Site Visit and Installation Service (Atlanta Only)</div>
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='pricing-table'>
                                <h4>Monthly Costs (no contracts, cancel anytime)</h4>
                                <ul className='pricing-list'>
                                    <li>
                                        <b>$99/month/TV</b>
                                        <div>Unlimited Slides/Portal Access and Monthly Service</div>
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                    <li>
                                        <b>FREE</b>
                                        <div>Lifetime Warranty on Hardware and Unlimited Phone Support</div>
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                    <li>
                                        <b>$20/month/TV</b>
                                        <div>Onsite Support and Service and Portal Management</div>
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                    <li>
                                        <b>$30/month/TV</b>
                                        <div>Streaming TV Service</div>
                                        <div className='table_btn'>
                                            <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
