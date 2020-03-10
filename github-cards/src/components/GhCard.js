import React from "react";

const GhCard = props => {
  return (
    <div class="card">
  <img src={props.user.avatar_url} />
  <div class="card-info">
    <h3 class="name">{props.user.name}</h3>
    <p class="username">{props.user.login}</p>
    <p>Location: {props.user.location}</p>
    <p>Profile:  
      <a href={props.user.html_url}>{props.user.html_url}</a>
    </p>
    <p>Followers: {props.user.followers}</p>
    <p>Following: {props.user.following}</p>
    <p>Bio: {props.user.bio}</p>
  </div>
  </div>
  );
};

export default GhCard;
