import React, { useState } from 'react'
import './Profile.css'
import Item from './Item';
import {
  Link
} from "react-router-dom";

export default function Profile() {
  const passwords=[
    {note: "gfg", password: "cnkejrnkbfub"},
    {note: "lc", password:"bchbeyciebi"},
  ]
  return (
    <>
        <div id="profile">
          {/* <button id='back'> */}
          <Link id='back' to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
          </Link>
        {/* </button> */}
          {/* <div id='image'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </div> */}
          <div id="username">
            Nazmus Saqib
          </div>
          <button id='logout'>
            Log Out
          </button>
        </div>
      <div id="searchbar">
        <h6>Saved Passwords: </h6>
        <input type="text" name="" id="searchWord" />
        <button>Search</button>
      </div>
      <div id='content-box'>
        <div className="contents" id=''>
          <p>
            <b>Note</b>
          </p>
          <p>
            <b>Password</b>
          </p>
          <div className='showButton'>
            
          </div>
        </div>
        {passwords.map((item)=>{
          return <Item password={item.password} note={item.note} key={item.note}/>
        })}
      </div>
    </>
  )
}
