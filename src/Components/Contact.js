import React, { useState } from "react";

import "../bootstrap-social.css";
import Social from "./Social";
import firebase from "../firebase"
const Contact = () => {
  const [state, setState] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
    success:false,
    error:"",
  })
  const handleChange = (name) => (event) => {
    setState({...state,error:false,[name]:event.target.value})
};
const {name,email,phone,message} = state;
const onSubmit = event =>{
  event.preventDefault();
  firebase.firestore().collection('contacts').add({
    name:name,
    email:email,
    phone:phone,
    message:message

  }).then(
    setState({
      name:"",
      email:"",
      phone:"",
      message:"",
      success:true,
      error:"",
    })
  )

}

  return (
    <div className="container  contact" data-aos="flip-left" id="contact">
      <h3 className="text-center">Contact me</h3>
      
      <div className="row">
        <div className="col-lg-6 offset-md-3">
          {state.success && (
            <div class="alert alert-success" role="alert">
              Your Message / Feedback was submitted.
          </div>
          )}
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
                required
                onChange={handleChange("name")}
                value = {name}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="8899889988"
                required
                onChange={handleChange("phone")}
                value = {phone}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="nitish@example.com"
                required
                onChange={handleChange("email")}
                value = {email}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange("message")}
                value = {message}
                required
              ></textarea>
            </div>
            <button onClick={onSubmit} type="submit" className="btn btn-primary text-center align-items-center">Submit</button>
          </form>
        </div>
        <Social/>
      </div>
      
    </div>
  );
};

export default Contact;
