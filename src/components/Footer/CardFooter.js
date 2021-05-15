/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import thumbsUpIcon from "../../icons/thumbs-up.svg";
import thumbsDownIcon from "../../icons/thumbs-down.svg";
import commentAltSmileIcon from "../../icons/comment-alt-smile.svg";
import expandArrowsAltIcon from "../../icons/expand-arrows-alt.svg";
import lightbulbIcon from "../../icons/lightbulb.svg";
import levelUpIcon from "../../icons/level-up.svg";

export default function footerFooter(props) {
  const { title, subtitle, comments, like, dislike, active, id } = props.data;
  const { onClick } = props;
  return (
    <>
      <section className={`footer__footer footer__footer${id}`}>
        <div onClick={onClick} className="footer__comment">
          <h2 className="footer__title">
            <img
              className="footer__bulb"
              src={lightbulbIcon}
              alt="red comment icon"
            />
            {title}
          </h2>
          <h3 className="footer__subtitle">
            {active ? (
              <img
                className="footer__icon"
                src={levelUpIcon}
                alt="level up icon"
              />
            ) : null}
            {subtitle}
          </h3>
        </div>
        <div className="footer__stats">
          <div className="footer__rating footer__stat">
            <span className="footer__comments">
              <img
                className="footer__icon"
                src={commentAltSmileIcon}
                alt="smiley comment icon"
              />
              <p className="footer__count">{comments}</p>
            </span>
          </div>
          <span className="footer__like footer__stat">
            <img
              className="footer__icon"
              src={thumbsUpIcon}
              alt="thumbs up icon"
            />
            <p className="footer__count">{like}</p>
          </span>
          <span className="footer__dislike footer__stat">
            <img
              className="footer__icon"
              src={thumbsDownIcon}
              alt="thumbs down icon"
            />
            <p className="footer__count">{dislike}</p>
          </span>
          {/* <div className="footer__expand footer__stat"> */}
          <button className="footer__expand footer__stat">
            <img
              className="footer__icon"
              src={expandArrowsAltIcon}
              alt="expand icon"
            />
          </button>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
