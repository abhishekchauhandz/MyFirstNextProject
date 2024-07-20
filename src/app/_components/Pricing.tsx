export default function Pricing() {
    return <>
        <section id='pricing' className='padd-section text-cente'>

            <div className='container' data-aos='fade-up'>
                <div className='section-title text-center'>

                    <h2>Meet With Price</h2>
                    {/* <p className='separator'>Integer cursus bibendum augue ac cursus .</p> */}
                </div>

                <div className='row' data-aos='fade-up' data-aos-delay='100'>

                    {/* <div className='col-md-6 col-lg-3'>
                        <div className='block-pricing'>
                            <div className='pricing-table'>
                                <h4>basic</h4>
                                <h2>$29</h2>
                                <ul className='list-unstyled'>
                                    <li><b>4 GB</b> Ram</li>
                                    <li><b>7/24</b> Tech Support</li>
                                    <li><b>40 GB</b> SSD Cloud Storage</li>
                                    <li>Monthly Backups</li>
                                    <li>Palo Protection</li>
                                </ul>
                                <div className='table_btn'>
                                    <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='col-md-6 col-lg-3'>
                        <div className='block-pricing'>
                            <div className='pricing-table'>
                                <h4>PERSONAL</h4>
                                <h2>$29</h2>
                                <ul className='list-unstyled'>
                                    <li><b>4 GB</b> Ram</li>
                                    <li><b>7/24</b> Tech Support</li>
                                    <li><b>40 GB</b> SSD Cloud Storage</li>
                                    <li>Monthly Backups</li>
                                    <li>Palo Protection</li>
                                </ul>
                                <div className='table_btn'>
                                    <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='col-md-6 row-lg-3'>
                        <div className='block-pricing'>
                            <div className='pricing-table'>
                                <h4>Upfront Costs</h4>

                                <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap:"3rem" }}>
                                    <li><b>$199/kit/location</b></li>
                                    <li>Startup Kit + Phone Install Support + 1st Month Free Service</li>
                                    <li><b>$100/kit/location</b></li>
                                    <li>Site Visit and Installation Service(Atlanta Only)</li>
                                </ul>

                                <div className='table_btn'>
                                    <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 row-lg-3'>
                        <div className='block-pricing'>
                            <div className='pricing-table'>
                                <h4>Monthly Costs (no conracts, cancel anytime)</h4>
                                <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap:"3rem" }}>
                                    <li><b>$99/month/TV</b></li>
                                    <li>Unlimited Slides/Portal Access and Monthly Service</li>
                                    <li><b>FREE</b></li>
                                    <li>Lifetime Warranty on Hardware and Unlimited Phone Support</li>
                                    <li><b>$20/month/TV</b></li>
                                    <li>Onsite Support and Service and Portal Management</li>
                                    <li><b>$30/month/TV</b></li>
                                    <li>Streaming TV Service</li>
                                </ul>
                                <div className='table_btn'>
                                    <a href='#' className='btn'><i className='bi bi-cart'></i> Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}