import React from 'react'


function Contact() {
    return (
        <>
            <div className="w3l-contact-10 py-5" id="contact">
    <div className="form-41-mian pt-lg-4 pt-md-3 pb-md-4">
        <div className="container">
            <div className="heading">
                <h3 className="category-title mb-3">Contact us </h3>
                <p className="mb-md-5 mb-4">If you have a question regarding our services, feel free
                    to contact us using the form below.</p>
            </div>
            <div className="row">
                <div className="col-lg-8 form-inner-cont">
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                        <div className="form-grids">
                            <div className="form-input">
                                <input type="text" name="w3lName" id="w3lName" placeholder="Enter your name *"
                                    required="" />
                            </div>
                            <div className="form-input">
                                <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Enter subject "
                                    required />
                            </div>
                            <div className="form-input">
                                <input type="email" name="w3lSender" id="w3lSender" placeholder="Enter your email *"
                                    required />
                            </div>
                            <div className="form-input">
                                <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Enter your Phone Number *"
                                    required />
                            </div>
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Your message here"
                                required=""></textarea>
                        </div>
                        <div className="text-right">
                            <button className="btn btn-style btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-4 contacts-5-grid-main section-gap mt-lg-0 mt-5">
                    <div className="contacts-5-grid">
                        <h3 className="section-title-left mb-4"> Advertise with us</h3>
                        <div className="map-content-5">
                            <section className="tab-content">
                                <div className="contact-type">
                                    <div className="address-grid mb-4">
                                        <h6>Address</h6>
                                        <p>#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.</p>
                                    </div>
                                    <div className="address-grid mb-4">
                                        <h6>Email Address</h6>
                                        <a href="mailto:mail@example.com" className="link1">mail@example.com</a>

                                    </div>
                                    <div className="address-grid">
                                        <h6>Phone Number</h6>
                                        <a href="tel:+12 324-016-695" className="link1">+12 324-016-695</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>

<div className="contacts-sub-5">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin"
        style={{"border":"0"}} allowfullscreen></iframe>
</div>
        </>
    )
}

export default Contact
