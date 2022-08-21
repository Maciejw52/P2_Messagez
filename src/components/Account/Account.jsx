import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./Account.css"

function Account() {

  const { currentUser } = useAuth();

  return (
    <section className='AccountPage'>
      <div className='AccountMainContainer'>
        <Link style={{ textDecoration: 'none' }} to={`../account`}>
          <img className='AccountProfileImage' referrerPolicy='no-referrer' src={`${currentUser.photoURL}`} alt="Profile"></img>
        </Link>
        <div>
          <div style={{display: "flex", justifyContent: "left", alignItems: "start"}}>
            <div className="AccountAttribute">Name</div>
            <div className="AccountDetail">{currentUser.displayName}</div>
          </div>
          <div style={{display: "flex"}}>
            <div className="AccountAttribute">Email</div>
            <div className="AccountDetail">{currentUser.email}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account