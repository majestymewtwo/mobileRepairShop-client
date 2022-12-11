function FAQ(){
    return(
        <div className="bg-dark py-5 px-4">
            <div className="container">
                <h3 className="text-warning fw-semibold mb-5">Frequently Asked Questions</h3>
                <div className="accordion mx-auto" id="accordionExample" style={{width:"65%"}}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      What repair can you do?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                         If your mobile phone is damaged and out of warranty, we will try and fix it for you
                      </div>
                    </div>
                  </div>
                  {/* Start */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Can You fix my home button?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                         Yes we can fix your devices home button, but please note that after the fix the finger print will not work.
                      </div>
                    </div>
                  </div>
                  {/* End */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How do I get my phone to you?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                        Hand in to one of our Drop Off Centres, by post or we can pick up your phone within a 5 mile radius of Norwich. Anything further than 5 miles will be at an additional cost. (Please contact us for details)
                      </div>
                    </div>
                  </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      What happens if you can't fix it?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                        On the odd occasion that we can not repair your phone, we will get in touch to let you know and return the phone. You will be charged the £10 service charge only.
                      </div>
                    </div>
                  </div>
                  {/* Start */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      If my phone is “water damaged” (damaged by any type of liquid) can you still fix it?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                         We can fix most water damaged phones as that is our speciality!
                      </div>
                    </div>
                  </div>
                  {/* End */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      DO I get any warrenty?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                        Yes we provide warranty to all our repairs followed by original spares (excluding liquid/physical damage)The warranty relates to the work we performed and not to any other unrelated fault that may develop within the 7 days period following the original repair. 
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      What payment methods do we accept?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                        As we want our customer convenience so, we are providing CASH ON DELIVERY(COD) as well as you will be having option of ONLINE PAYMENT 
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      Which smartphone brand repair we provide ?
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body bg-dark text-white">
                         We serve these brands, Samsung , Apple, Micromax , Xiaomi, Motorola, vivo, Nokia , Oneplus , Poco , Oppo , iQOO , Realme , Lava , Intex , Infinix , Tecno.
                      </div>
                    </div>
                  </div>

                  </div>
                </div>
        </div>
    )
}

export default FAQ;