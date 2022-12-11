function ContactUs(){
    return(
        <div className="px-4 py-5 bg-dark text-white">
            <section className="mb-4">
                <h2 className="fw-bold my-5 fs-1 text-center text-warning">CONTACT US</h2>
                <p className="text-center mx-auto mb-5 fw-semibold fs-5 w-50">Do you have questions? Please do not hesitate to contact us directly.our team will comeback to you within a matter of hours to meet you.</p>
                <div className="row">
                    <div className="col-10 col-md-8 mb-5 mx-auto">
                        <form id="contactform">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" name="name" className="form-control"/>
                                        <label htmlFor="name">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" name="email" className="form-control"/>
                                        <label htmlFor="name">Your email</label>
                            </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" name="subject" className="form-control"/>
                                        <label htmlFor="subject">Phone Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" name="message" rows="3" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>
                                </div>
                            </div>
                         <div className="text-center text-md-left">
                            <button className="btn btn-warning w-25 fw-bold fs-5 my-4" type="submit">Send</button>
                         </div>   
                        </form>
                    </div>
                    <div className="col-6 col-md-3 mx-auto text-center text-primary">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fas fa-map-marker-alt fa-3x text-warning"></i>
                                <p className="text-white fw-semibold">Tamil Nadu,India</p>
                            </li>
                            <li>
                                <i className="fas fa-phone mt-4 fa-3x text-warning"></i>
                                <p className="text-white fw-semibold">+91 9876543210</p>
                            </li>
                            <li>
                                <i className="fas fa-envelope mt-4 fa-3x text-warning"></i>
                                <p className="text-white fw-semibold">test@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>   
            </section>
        </div>
    )
}
export default ContactUs;