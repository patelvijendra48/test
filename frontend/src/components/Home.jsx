// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import DataTableComponent from "./DataTable";
import { useEffect } from "react";

const Home = () => {
let navigate  = useNavigate();
  useEffect(()=>{
  let token =   localStorage.getItem('token')
   if(!token){
    navigate('/login');
   }
  },[])

const logOut = ()=>{
  localStorage.clear();
  navigate('/login');

}
  return (
    <>
     <div  className="d-flex justify-content-end align-items-center text-center m-4  mx-6">
    
     <div onClick={logOut} className="btn btn-light my-6">Logout</div>
     </div>
     <div  className="d-flex flex-column justify-content-center align-items-center text-center">
       

       <h1 className="my-4 text-center">Posts</h1>
      <DataTableComponent />
  </div>
    
    </>

  )
}

export default Home