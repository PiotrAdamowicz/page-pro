import React, { useState } from "react";

import csupportLogo from "../../icons/csupport-logo.svg";
import robotIcon from "../../icons/robot.svg";
import dotsIcon from "../../icons/ellipsis-v.svg";

import Button from "../Button";

export default function Nav() {
  const [focus, setFocus] = useState(false);
  const buttons = [
    {
      block: "nav",
      icon: "diagnoses.svg",
      text: "Answers",
      isActive: false,
      id: "Answers",
      focused: "btn",
    },
    {
      block: "nav",
      icon: "comment-dots.svg",
      text: "Questions",
      isActive: false,
      id: "Questions",
      focused: "btn",
    },
    {
      block: "nav",
      icon: "comments.svg",
      text: "Conversations",
      isActive: false,
      id: "Conversations",
      focused: "btn",
    },
    {
      block: "nav",
      icon: "chart-pie.svg",
      text: "Analytics",
      isActive: false,
      id: "Analytics",
      focused: "btn",
    },
    {
      block: "nav",
      icon: "cog.svg",
      text: "Settings",
      isActive: false,
      id: "Settings",
      focused: "btn",
    },
  ];
  const focusHandler = () => {
    setFocus(!focus);
  };
  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img
            className="nav__logoIcon"
            alt="Support Logo "
            src={csupportLogo}
          />
        </div>
        <div className="nav__buttons">
          {buttons.map((button) => {
            return <Button key={button.id} data={button} />;
          })}
        </div>
        <div onBlur={blurHandler} className="nav__settings">
          <button
            onFocus={focusHandler}
            className={`settings__btn ${
              focus ? " settings__btn--focused" : ""
            }`}
          >
            <span className="settings__text">
              Test Bot{" "}
              <img
                className="settings__icon"
                src={robotIcon}
                alt="robot icon"
              />
            </span>
          </button>
          <button
            onFocus={focusHandler}
            className={`settings__user ${
              focus ? "settings__user--focused" : ""
            }`}
          >
            <span className="settings__initials">KC</span>
            <div className="settings__fullName">
              <span className="settings__firstName">Kasper</span>
              <span className="settings__lastName">AGENT</span>
            </div>
          </button>
          <button
            onFocus={focusHandler}
            className={`settings__menu ${
              focus ? "settings__menu--focused" : ""
            }`}
          >
            <img className="settings__icon" src={dotsIcon} alt="dots menu" />
          </button>
        </div>
      </nav>
    </header>
  );
}
