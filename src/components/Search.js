import React from "react";
import searchIcon from "../icons/search.svg";

export default function Search(props) {
  return (
    <div className="search">
      <div className="search__iconBg">
        <img className="search__icon" src={searchIcon} alt="search icon" />
      </div>
      <input className="search__input" placeholder="Search Questions" />
    </div>
  );
}
