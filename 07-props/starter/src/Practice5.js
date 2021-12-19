import React from "react";

const Practice5 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Zachary",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "zgordon",
    loginStatus: 0,
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user} />
    </div>
  );
};

/*
  2. Destructure all of the props you will need 
  3. Pass the firstName and lastName to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = ({
  firstName,
  lastName,
  username,
  url,
  twitter,
  preferredName,
  loginStatus,
}) => {
  return (
    <div className="user">
      <FullName
        firstName={firstName}
        preferredName={preferredName}
        lastName={lastName}
      />
      <h3>
        <Username username={username} loginStatus={loginStatus} />
      </h3>
      <Social url={url} twitter={twitter} />
    </div>
  );
};

/*
  6. Destructure the props needed
*/
const FullName = ({ firstName, lastName, preferredName }) => (
  <h1>
    {firstName} ({preferredName}) {lastName}
  </h1>
);

/*
  7. Create a <Username /> component that displays the username
*/

const Username = ({ username, loginStatus }) => {
  const isLoggedIn = loginStatus;
  return (
    <div>
      <h3>
        {username}
        <span> ({isLoggedIn ? "Online" : "Offline"})</span>
      </h3>
    </div>
  );
};

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = ({ url, twitter }) => {
  // const twitterURL = "https://twitter.com/" + twitter;
  return (
    <ul className="social">
      <li>
        <a href={url}>{url}</a>
      </li>
      <li>
        {/* <a href={twitterURL}>{twitter}</a> */}
        {/* Alternative and better syntax than the one above */}
        <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
      </li>
    </ul>
  );
};

export default Practice5;
