import React, { useState } from "react";

import "../bootstrap-social.css";
import Social from "./Social";
import {submitMessage} from "../core/helper/corehelper"
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
  submitMessage({name,email,phone,message})
  .then(data=>{
    if(data.email===email){
        setState(
            {
                name:"",
                email:"",
                phone:"",
                message:"",
                success:true,
            }
        )
    }else{
        setState({
            ...state,
            success:false
        })
    }
  })
  .catch(e=>console.log(e));

}

  return (
    <div className="container  contact" id="contact">
      <h3 className="text-center">Contact me</h3>
      <div className="row">
        <div className="col-lg-6 offset-md-3">
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
