import React, {useContext, useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
const Login=()=>{
  const {state,dispatch} = useContext(UserContext);

  const history=useHistory();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(e)=>{
     e.preventDefault();

     const res= await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
        },
        
        body:JSON.stringify({
            email,password
        })
     });
     const data=await res.json();
     
     if(res.status===400 || !data){
       window.alert("Invalid Credentials");
     }else{
      dispatch({type:"USER",payload:true})
      window.alert("Login Successful");
      history.push("/");
     }
  }
  return(
    <>
      <section className="mt-10 signup container shadow p-3 mb-5 bg-body rounded">
       <div className="container mt-5">
         <div className="mx-4 signup-content">
           <div className="row">
             <div className="col-md-6">
             <h2>Log In</h2>
             <hr/>
             <form method="POST" className="register-form" id="register-form">
            
              <div className=''>
                <div className='row'>
                <label htmlFor="email">
                Email ID:
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here" className='form-control mx-4'></input>
                  </div>
                  <div className='row'>
                  <label htmlFor="password">
                Password:
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" className='form-control mx-4'></input>
                    </div>
              </div>
              <br/>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit login btn btn-outline-primary"
                onClick={loginUser} value="Log In"/>
              </div>
              <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT  | </NavLink>
              <NavLink to="/AdminLogin" className="login-image-link"> &nbsp;LOGIN AS ADMIN</NavLink>
             </form>
             </div>
           </div>
         </div>
       </div>
      </section>
    
    </>
  )
}

export default Login;