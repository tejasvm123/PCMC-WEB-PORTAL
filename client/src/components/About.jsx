import React from 'react';
import { useEffect, useState } from 'react';

const About=()=>{
    //const history=useHistory();
    const [userData,setUserData] =useState();

    const callAboutPage=async()=>{
       try{
         const res = await fetch("/about",{
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
         });
         const data=await res.json();
         setUserData(data);

         console.log(`this is useState daa: ${userData.name}`);
         if(!res.status===200){
             const error=new Error(res.err);
             throw error;
         }
       }catch(err){
           console.log(err);
           //history.push("/login");
       }
    }
    useEffect(()=>{
       callAboutPage();
    },[])

    // var d=new Date(`${userData.grievances[0].date}`);
    // console.log(d); 
    
    if(userData){
        return(
            <>
            <div className="container shadow p-3 mb-5 bg-body rounded ">
            <div className="m-4">
            <h1 className='text-center my-2'>Profile</h1>
            <hr />
            <form method="GET">
              <div className="row">
                <div className="col-md-6">
                <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>Personal Information</h3>
                <h5>Name: <span>{userData.name}</span></h5>
                <h5>Address: {userData.address}</h5>
                {/* <h3>Date: {userData.grievances}</h3> */}
                </div>
                <div className="col-md-6">
                <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>Contact Information</h3>
                <h5>Phone: {userData.phone}</h5>
                <h5>Email: {userData.email}</h5>
            </div>
              </div>
          <hr/>
            <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>grievances</h3>
            <br />
            <div className="table-responsive">
                <table className="table table-hover">
                <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Department</th>
                    <th scope='col'>Grievance</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Feedback</th>
                </tr>
                { userData.grievances.map((cval)=>{
                return <tr>
                <td>{cval.date}</td>
                <td>{cval.dept}</td>
                <td>{cval.grievance}</td>
                <td>{cval.status}</td>
                <td>{cval.feedback}</td>
                </tr> }) }
                </table>
                <br />
              </div>
        </form> 
        </div>
        </div>
       
    </>
        );
    }
    else{
        return(
            <>
            <p className='maintext'>Unable to load data. Try to refresh or relogin.</p>
            </> 
        ); 
    }
}

export default About;