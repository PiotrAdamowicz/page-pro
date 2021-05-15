import React from "react";

import csupportLogo from "../../icons/csupport-logo.svg";
import diagnosesIcon from "../../icons/diagnoses.svg";
import commentDotsIcon from "../../icons/comment-dots.svg";
import commentIcon from "../../icons/comments.svg";
import chartPieIcon from "../../icons/chart-pie.svg";
import cogIcon from "../../icons/cog.svg";
import robotIcon from "../../icons/robot.svg";
import dotsIcon from "../../icons/ellipsis-v.svg";

import ButtonNav from "./BtnNav";

export default function Nav() {
  const buttons = [
    {
      block: "nav",
      icon: { diagnosesIcon },
      text: "Answers",
      id: 0,
    },
    {
      block: "nav",
      icon: { commentDotsIcon },
      text: "Questions",
      id: 1,
    },
    {
      block: "nav",
      icon: { commentIcon },
      text: "Conversations",
      id: 2,
    },
    {
      block: "nav",
      icon: { chartPieIcon },
      text: "Analytics",
      id: 3,
    },
    {
      block: "nav",
      icon: { cogIcon },
      text: "Settings",
      id: 4,
    },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav__logo" alt="Support Logo " src={csupportLogo} />

        {buttons.map((button) => {
          return <ButtonNav data={button} />;
        })}

        <div className="settings">
          <button className="nav__btn settings__btn">
            Test Bot
            <img className="nav__icon" src={robotIcon} alt="robot icon" />
          </button>
          <button className="settings__user">
            <span className="settings__initials">KC</span>
            <div className="settings__fullName">
              <span className="settings__firstName">Kasper</span>
              <span className="settings__lastName">AGENT</span>
            </div>
          </button>

          <button className="nav__btn settings__menu">
            <img className="nav__icon" src={dotsIcon} alt="dots menu" />
          </button>
        </div>
      </nav>
    </header>
  );
}
