import React from "react";

import csupportLogo from "../../icons/csupport-logo.svg";
import robotIcon from "../../icons/robot.svg";
import dotsIcon from "../../icons/ellipsis-v.svg";

import IconNav from "../Icon";

export default function Nav() {
  const buttons = [
    {
      block: "nav",
      icon: "diagnoses.svg",
      text: "Answers",
      id: 0,
    },
    {
      block: "nav",
      icon: "comment-dots.svg",
      text: "Questions",
      id: 1,
    },
    {
      block: "nav",
      icon: "icons/comments.svg",
      text: "Conversations",
      id: 2,
    },
    {
      block: "nav",
      icon: "icons/chart-pie.svg",
      text: "Analytics",
      id: 3,
    },
    {
      block: "nav",
      icon: "icons/cog.svg",
      text: "Settings",
      id: 4,
    },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__logo" alt="Support Logo " src={csupportLogo} />

        {buttons.map((button) => {
          const { block, text, id } = button;
          return (
            <button key={id} className={`${block}__btn`}>
              <IconNav data={button} />
              <span key={`${id}1`} className={`${block}__text`}>
                {text}
              </span>
            </button>
          );
        })}

        <div className="settings">
          <button className="settings__btn">
            <span className="settings__text">
              Test Bot{" "}
              <img
                className="settings__icon"
                src={robotIcon}
                alt="robot icon"
              />
            </span>
          </button>
          <button className=" settings__user">
            <span className="settings__initials">KC</span>
            <div className="settings__fullName">
              <span className="settings__firstName">Kasper</span>
              <span className="settings__lastName">AGENT</span>
            </div>
          </button>
          <button className=" settings__menu">
            <img className="settings__icon" src={dotsIcon} alt="dots menu" />
          </button>
        </div>
      </nav>
    </header>
  );
}
