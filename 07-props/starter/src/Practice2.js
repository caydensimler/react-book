import React from "react";

const Practice2 = () => {
  /*
    1. Create post object with an id and title
  */
  const post = {
    id: 1,
    title: "New Post",
  };
  return (
    <div className="practice">
      {/* 
        2. Call the Post component below
        3. Pass in the post object as a prop
      */}
      <Post post={post} />
    </div>
  );
};

/*
  4. Make the Post component accept props
  5. Have Post component render the post title and ID to the page
*/
const Post = (props) => {
  return (
    <p>
      Render post {props.post.title} and {props.post.id} here
    </p>
  );
};

export default Practice2;
