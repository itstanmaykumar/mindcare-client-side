import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import dpic from '../../datepick.png';

const ServiceDetails = () => {
    const {serviceId}= useParams();
    const key = parseInt(serviceId);
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[]);

    const service = serviceDetails.find( ({ id }) => id === key );
    return (
        <div className="container text-start">
            <section>
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <h1 className="my-3 fw-bolder">{service?.title}</h1>
                        <p>{service?.description}</p>
                        <p><span className="px-2 py-1 me-1 btn-main rounded-3"><i className="fas fa-stopwatch"></i> Duration</span> <span className="fw-bolder text-second">{service?.duration} Hours</span></p>
                        <p><span className="fw-bolder text-main">Therapist: </span> Jane Doe</p>
                    </div>
                    <div className="col-md-5">
                        <img className="p-5 img-fluid" src={service?.img} alt="service img" />
                    </div>
                </div>
                <div>
                    <h3 className="fw-bolder">What is <span className="text-main">{service?.title}</span> ?</h3>
                    <p className="py-3">{service?.what}</p>
                </div>
                <div>
                    <h3 className="fw-bolder">Common symtomps -</h3>
                    <ul className="p-3">
                        {
                            service?.sym.map(symp=>(
                                <li className="mx-5 list-unstyled fs-5"><i className="fas fa-caret-right text-main"></i> {symp}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className="fw-bolder">How to cure <span className="text-main">{service?.title}</span> ?</h3>
                    <p className="py-3">{service?.cure}</p>
                </div>
            </section>
            <section>
                
            </section>
            <section>
                <div className="my-5 row align-items-center">
                    <h1 className="text-center fw-bolder">Book An <span className="text-main">Appointment</span></h1>
                    <p className="text-center text-second">Pick your suitable time and weekday. We will confirm your appoinment over the email.</p>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={dpic} alt="date pick" />
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="form-body">
                            <div className="row">
                                <div className="form-holder">
                                    <div className="form-content">
                                        <div className="form-items">
                                                <div className="my-2 col-md-12">
                                                    <input className="form-control" type="text" name="name" placeholder="Your Full Name" required />
                                                </div>
                                                <div className="my-2 col-md-12">
                                                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                                                </div>
                                                <div className="my-2 col-md-12">
                                                    <select className="mt-3 form-select" required>
                                                        <option selected disabled value="">Pick A Week Date</option>
                                                        <option value="jweb">Satday</option>
                                                        <option value="sweb">Monday</option>
                                                        <option value="pmanager">Wednesday</option>
                                                    </select>
                                                </div>

                                            <div className="my-2 col-md-12">
                                                <label className="p-1 mb-3 rounded-3 me-3 btn-main" for="pickTime"> Pick Your Suitable Time</label>
                                                <input type="time" name="" id="pickTime" />
                                            </div>

                                            <div className="my-2 col-md-12">
                                                <label className="mb-3 me-2 fw-bolder text-second" for="gender">Gender: </label>
                                                <input type="radio" className="btn-check" name="gender" id="male" autocomplete="off" required />
                                                <label className="btn btn-sm btn-outline-main me-3" for="male">Male</label>

                                                <input type="radio" className="btn-check" name="gender" id="female" autocomplete="off" required />
                                                <label className="btn btn-sm btn-outline-main" for="female">Female</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input text-main" type="checkbox" value="" id="invalidCheck" required />
                                                <label className="form-check-label">I confirm that all data are correct</label>
                                            </div>

                                            <div className="mt-3 form-button">
                                                <button id="submit" type="submit" className="btn btn-main">Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;