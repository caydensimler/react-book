import React from "react";

const accountInformation = () => {
  const id = 1;
  const username = "zgordon";
  const email = "test@testmail.com";
  const combo = email + id;

  return (
    <div className="account-details">
      {/* 
        1.Pass the id and username into <User /> as props 
      */}
      <User id={id} username={username} email={email} combo={combo} />
    </div>
  );
};

const User = (props) => {
  return (
    <>
      <h1>Username: {props.username}</h1>
      <p>Combo: {props.combo}</p>
    </>
  );
};

export default accountInformation;
