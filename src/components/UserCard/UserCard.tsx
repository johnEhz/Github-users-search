import React from "react";
import { user } from "../../types";
import "./UserCard.css";

import { MdLocationOn } from "react-icons/md";
import { AiOutlineTwitter, AiOutlinePaperClip } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

interface UserCardProps {
  user: user;
}

const UserCard = ({ user }: UserCardProps) => {
  const year = user.created_at.getFullYear();
  const month = user.created_at.getMonth();
  const day = user.created_at.getDay();
  return (
    <article id="userCard">
      <div className="head">
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <div>
            <h2>{user.name}</h2>
            <small>@{user.login}</small>
          </div>
        </div>
        <small>
          Joined at {year} / {month} / {day}
        </small>
      </div>
      <div className="body">
        <div className="bio">
          <p>{user.bio ? user.bio : "No description avaible"}</p>
        </div>
        <div className="info">
          <div className="data-info">
            <h5>Repos</h5>
            <h4>{user.public_repos}</h4>
          </div>
          <div className="data-info">
            <h5>Followers</h5>
            <h4>{user.followers}</h4>
          </div>
          <div className="data-info">
            <h5>Following</h5>
            <h4>{user.following}</h4>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>
          <MdLocationOn size={25} />
          {user.location ? user.location : "No Avaible"}
        </h4>
        <h4>
          <AiOutlineTwitter size={25} />
          {user.twitter_username ? user.twitter_username : "No Avaible"}
        </h4>
        <h4>
          <AiOutlinePaperClip size={25} />
          {user.blog ? user.blog : "No Avaible"}
        </h4>
        <h4>
          <BsBuilding size={25} />
          {user.company ? user.company : "No Avaible"}
        </h4>
      </div>
    </article>
  );
};

export default UserCard;
