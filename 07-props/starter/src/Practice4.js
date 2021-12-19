import React from "react";

const Practice4 = () => {
  const user = {
    id: 1,
    username: "csimler",
    firstName: "Cayden",
    lastName: "Simler",
    preferredName: "Cayden",
    url: "https://caydensimler.com",
    twitter: "@caydensimler",
  };

  // having a different const with a similar prop causes it to overwrite when called
  const alt = {
    twitter: "@caydensimleralt",
  };

  return (
    <div className="practice">
      {/* Passes all the props of the user component */}
      <User {...user} {...alt} />
    </div>
  );
};

/*
  2. Destructure username and firstName from props
*/
// const User = (props) => (
//   <div className="user">
//     <h1>Welcome, {props.firstName}</h1>
//     <p>Username: {props.username}</p>
//     <p>Twitter Alt: {props.twitter}</p>
//   </div>
// );

// It's important to be as specific as possible for context in code
const User = ({ firstName, username, twitter }) => (
  <div className="user">
    <h1>Welcome, {firstName}</h1>
    <p>Username: {username}</p>
    <p>Twitter Alt: {twitter}</p>
  </div>
);

export default Practice4;
