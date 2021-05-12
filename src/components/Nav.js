import React from "react";
import csupportLogo from "../icons/csupport-logo.svg";
import diagnosesIcon from "../icons/diagnoses.svg";
import commentDotsIcon from "../icons/comment-dots.svg";
import commentIcon from "../icons/comments.svg";
import chartPieIcon from "../icons/chart-pie.svg";
import cogIcon from "../icons/cog.svg";
import robotIcon from "../icons/robot.svg";
import dotsIcon from "../icons/ellipsis-v.svg";

export default function Nav() {
  return (
    <header className="nav">
      <img className="nav__logo" alt="Support Logo " src={csupportLogo} />
      <nav>
        <button className="nav__btn">
          <img className="nav__icon" src={diagnosesIcon} alt="diagnoses icon" />
          Answers
        </button>
        <button className="nav__btn">
          <img
            className="nav__icon"
            src={commentDotsIcon}
            alt="comment dots icon"
          />
          Questions
        </button>
        <button className="nav__btn">
          <img className="nav__icon" src={commentIcon} alt="comment icon" />
          Conversations
        </button>
        <button className="nav__btn">
          <img className="nav__icon" src={chartPieIcon} alt="chart pie icon" />
          Analytics
        </button>
        <button className="nav__btn">
          <img className="nav__icon" src={cogIcon} alt="cog icon" />
          Settings
        </button>
      </nav>
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
    </header>
  );
}
