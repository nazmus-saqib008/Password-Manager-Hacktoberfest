import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import Item from './Item';
import Header from './Header';
import { UserContext } from '../UserContext';

export default function Profile() {
  // const passwords=[
  //   {note: "gfg", password: "cnkejrnkbfub"},
  //   {note: "lc", password:"bchbeyciebi"},
  // ]
  const {userInfo}= useContext(UserContext);
  const [passwords, setPasswords]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/data',{
      method: 'GET',
      credentials: 'include',
    }).then(response=>{
      response.json().then(data=>{
        console.log(data);
        setPasswords(data);
      })
    })
  },[])
  
  return (
    <>
      <Header/>
      <div id="searchbar">
        <h6>Saved Passwords: </h6>
        <input type="text" name="" id="searchWord" />
        <button>Search</button>
      </div>
      <div id='content-box'>
        <div id='content-header'>
          <p>
            <b>Title</b>
          </p>
          <p>
            <b>Password</b>
          </p>
          <div className='showButton'>
            
          </div>
        </div>
        {passwords.map((item)=>{
          return <Item password={item.pass} title={item.title} note={item.note} key={item._id}/>
        })}
      </div>
    </>
  )
}
