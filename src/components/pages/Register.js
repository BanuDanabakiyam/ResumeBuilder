import { useState } from 'react';
import './RegisterPage.css'
import { Link } from 'react-router-dom';
export default function RegisterPage() {
   const initialErrorState = {
      email:{required:false},
        password:{required:false},
        name:{required:false},
        custom_error:null
   }
    const [errors,setErrors] = useState(initialErrorState);
    const [Loading,setLoading] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      let errors = initialErrorState;
      if(inputs.name == ""){
         errors.name.required = true;
      }
      if(inputs.password == ""){
         errors.password.required = true;
      }
      if(inputs.email == ""){
         errors.email.required = true;
      }
      setErrors(errors);


    }
    const[inputs,setInputs] =  useState({
      email : "",
      password:"",
      name: ""
    })

    const handleInput = (event) =>{
      setInputs({...inputs,[event.target.name]:event.target.value})

    }
    return(
      <section className="register-block">
            <div className="container">
               <div className="row ">
                  <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form" action="register.php" method='POST'>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
          
                        <input type="text" className="form-control" onChange={handleInput} name="name" id="" placeholder='Your Name'/>
                        {errors.name.required?
                           (<span className="text-danger" >
                            Name is required.
                        </span>):null}
                     </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
          
                        <input type="text"  className="form-control"onChange={handleInput} name="email" id=""  placeholder='Your Email'/>
                        {errors.email.required?
                        (<span className="text-danger" >
                            Email is required.
                        </span>):null}
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password" onChange={handleInput} name="password" id="" placeholder='Create Password' />
                        {errors.password.required?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null}
                     </div>
                     <div className="form-group">
                        <span className="text-danger" >
                        {errors.custom_error?
                        (<p>{errors.custom_error}</p>):null}
                        </span>
                        {Loading ?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null}
          
                        <input type="submit" className="btn btn-login float-right" disabled={Loading} value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       Already have an account ?<Link to={'/login'}><a href="">Login</a></Link> 
                     </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
          </section>
          
    );
}