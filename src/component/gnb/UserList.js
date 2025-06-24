import React, { useState } from "react";
import {Routes, Route,Link} from "react-router-dom";

function UsersList(params) {
  const handleClickInUsersList = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="UsersList" onClick={handleClickInUsersList} >
      <Link to="/" className="UserLink on">
        <div className="UserProfileImg">
          <img src="http://img.lifestyler.co.kr/uploads/program/2/2197/menu/4/html/f132470404914550966(0).png" />
        </div>
        <div className="UserNickName">JoJongJong</div>
      </Link>
      <Link to="/a" className="UserLink on">
        <div className="UserProfileImg">
          <img src="http://img.lifestyler.co.kr/uploads/program/2/2197/menu/4/html/f132470404914550966(0).png" />
        </div>
        <div className="UserNickName">JoJongJong</div>
      </Link>
    </div>
  );
}

export default UsersList;
