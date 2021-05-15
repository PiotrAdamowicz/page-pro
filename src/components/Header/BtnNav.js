import React from "react";

export default function BtnNav(props) {
  const { block, icon, text } = props.data;
  return (
    <button className={`${block}__btn`}>
      <img className="nav__icon" src={icon} alt="icon" />
      {text}
    </button>
  );
}
