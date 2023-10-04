import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import Item from './Item';
import Header from './Header';

export default function Profile() {
  const passwords=[
    {note: "gfg", password: "cnkejrnkbfub"},
    {note: "lc", password:"bchbeyciebi"},
  ]

  
  return (
    <>
      <Header/>
      <div id="searchbar">
        <h6>Saved Passwords: </h6>
        <input type="text" name="" id="searchWord" />
        <button>Search</button>
      </div>
      <div id='content-box'>
        <div className="contents" id=''>
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
          return <Item password={item.password} note={item.note} key={item.note}/>
        })}
      </div>
    </>
  )
}
