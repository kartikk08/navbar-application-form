import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import FormPage from './FormPage';
import store from '../store/reducer';
import { useDispatch } from 'react-redux'

function EditProfile() {
const location = useLocation();
const userId = location.state.id

// const [user,setUser]= useState({});

// useEffect(() => {

//     store.getState().users.forEach((user)=>{

//         if(user.id===userId)
//         setUser(user)

//     })
  
// }, [user])

// console.log(user);

const dispatch =useDispatch()

   
  return (
    <div>EditProfile {location.state.id} 
    <FormPage user={user}/>
    
    </div> )



}

export default EditProfile