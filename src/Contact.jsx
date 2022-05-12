import React, { useEffect, useState } from "react";
import Form from "./Form";
import Fdata from "./Fdata";
import MyButton from "./MyButton";
import Emailjs from "emailjs-com";

const Contact = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    Emailjs.sendForm(
      "service_fi04nug",
      "template_3z58vex",
      e.target,
      "dyzr40wUf_DKSF77L"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-12 mx-auto contact">
          <h2 className="text-center mt-5 con-text">Contact US</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            ratione? dignissimos molestias laudantium? Assumenda sit repudiandae
            quasi.
          </p>
          <form onSubmit={sendEmail}>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-lg-12 mx-auto ">
                  <div className="row gx-9">
                    {Fdata.map((val, ind) => {
                      return (
                        <>
                          <div className="col-lg-12 gy-2">
                            <Form key={ind} mail={val.mail} />
                          </div>
                        </>
                      );
                    })}
                    <div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control text"
                          name="useremail"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <textarea
                        className="form-control text"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <button
                    type="submit"
                    value={"send"}
                    className="btn-primary btn-submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
