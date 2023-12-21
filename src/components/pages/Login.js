import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginPage() {
    const initialErrorState = {
        email:{required:false},
          password:{required:false},
          custom_error:null
     }
     const [errors,setErrors] = useState(initialErrorState);
     const [Loading,setLoading] = useState(false);
     const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialErrorState;
        
        if(inputs.password == ""){
           errors.password.required = true;
        }
        if(inputs.email == ""){
           errors.email.required = true;
        }
        setErrors(errors);
  
  
      }
      const handleInput = (event) =>{
        setInputs({...inputs,[event.target.name]:event.target.value})
  
      }
      const[inputs,setInputs] =  useState({
        email : "",
        password:"",
      })


    return(
        <section className="login-block">
            <div className="container">
                <div className="row ">
                    <div className="col login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <form onSubmit={handleSubmit} className="login-form" action="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                            <input type="email"  className="form-control" name="email" onChange={handleInput} id="" placeholder="email"/>
                            {errors.email.required?
                        (<span className="text-danger" >
                            Email is required.
                        </span>):null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input  className="form-control" type="password"  name="password" onChange={handleInput}  placeholder="password" id="" />
                            {errors.password.required?
                            (<span className="text-danger" >
                            Password is required.
                            </span>):null}
                        </div>
                        <div className="form-group">
                        {Loading ?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null}
                            <span className="text-danger" >
                            {errors.custom_error?
                        (<p>{errors.custom_error}</p>):null}                            </span>
                            <input  type="submit" className="btn btn-login float-right"  value="Login"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group">
                        Create new account ? Please <Link to={'/register'}><a  href="">Register</a></Link> 
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}