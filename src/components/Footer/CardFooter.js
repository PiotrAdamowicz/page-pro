/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import commentAltLinesIcon from "../../icons/comment-alt-lines.svg";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import thumbsDownIcon from "../../icons/thumbs-down.svg";
import commentAltSmileIcon from "../../icons/comment-alt-smile.svg";
import expandArrowsAltIcon from "../../icons/expand-arrows-alt.svg";

export default function CardFooter(props) {
  const { title, subtitle, comments, like, dislike } = props.data;
  return (
    <div>
      <section className="cardFooter">
        <div className="cardText">
          <img
            className="cardText__icon"
            src={commentAltLinesIcon}
            alt="red comment icon"
          />
          <h2 className="cardText__title">{title}</h2>
          <h3 className="cardText__subtitle">{subtitle}</h3>
        </div>
        <div className="cardStats">
          <div className="cardStats__section">
            <img
              className="cardStats__icon"
              src={commentAltSmileIcon}
              alt="smiley comment icon"
            />
            <span className="cardStats__comments">{comments}</span>
          </div>
          <div className="cardStats__section">
            <img
              className="cardStats__icon"
              src={thumbsUpIcon}
              alt="thumbs up icon"
            />
            <span className="cardStats__comments">{like}</span>
          </div>
          <div className="cardStats__section">
            <img
              className="cardStats__icon"
              src={thumbsDownIcon}
              alt="trash icon"
            />
            <span className="cardStats__comments">{dislike}</span>
          </div>
          <div className="cardStats__section">
            <button className="cardStats__expandBtn"></button>
            <img
              className="cardStats__icon"
              src={expandArrowsAltIcon}
              alt="trash icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
