import React, { useState,useEffect } from "react";
import UsersList from "./UserList";
import logo from "../../logo.svg";
import heart from "../../heart.svg";
import create from "../../create.svg";




const ItemList = [
  {
    logo: heart,
    name: "Swerving",
  },
  {
    logo: create,
    name: "Create",
  },
];

function TopLogo(props) {
  return (
    <div className="TopLogo logo">
      <img src={props.logoSrc} alt="" />
    </div>
  );
}


function GnbItemWrapper() {
  return (
    <div className="GnbItemWrapper wrapper">
      {ItemList.map((Item, Index) => (
        <GnbItem key={Index} Item={Item} />
      ))}
    </div>
  );
}
const GnbItem = (Item) => {

    const [isShowing, setIsShowing] = useState(false);

    const handleClick = () => {
      setIsShowing(!isShowing);
    };

  return (
    <div onClick={handleClick} className={(isShowing ? 'on ' : '') + "GnbItem item"}>
      <div className="gnb_icon icon">
        <img src={Item.Item.logo} alt="" />
      </div>
      <div className="GnbItem_title title">
        <div className="title">{Item.Item.name}</div>
      </div>
      {Item.Item.name === "Swerving" && (
        <UsersList />
      )}
    </div>
  );
};

function GnbEtc() {
  return <div className="GnbEtc etc"></div>;
}

function GnbWrapper() {
  return (
    <div className="GnbWrapper wrapper">
      <TopLogo logoSrc={logo} />
      <GnbItemWrapper />
      <GnbEtc />
    </div>
  );
}

function gnb() {
  return (
    <section className="gnb">
      <GnbWrapper />
    </section>
  );
}

export default gnb;
