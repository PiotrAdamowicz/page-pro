/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import commentAltLinesIcon from "../../icons/comment-alt-lines.svg";
import commentAltExclamationIcon from "../../icons/comment-alt-exclamation.svg";
import trashIcon from "../../icons/trash.svg";
import commentAltIcon from "../../icons/comments-alt.svg";
import robotIcon from "../../icons/robot.svg";
import Select from "../Select";

export default function Card(props) {
  const { message, select, timeStamp, status, iconType } = props.query;
  return (
    <>
      <section className="card">
        <div className="cardHeader">
          <img
            className="cardHeader__icon"
            src={
              iconType === "red"
                ? commentAltLinesIcon
                : commentAltExclamationIcon
            }
            alt="red comment icon"
          />
          <h3 className="cardHeader__message">{message}</h3>
        </div>
        <Select block="cardSelect" arrow select={select} />
        {select ? (
          <div className="cardMain">
            <a className="cardMain__link" href="#">
              View conversation
              <img src={commentAltIcon} alt="comments icon" />
            </a>
            <button className="cardMain__btn">
              <p>Train</p>
              <img
                className="cardMain__icon"
                src={robotIcon}
                alt="robot icon"
              />
            </button>
          </div>
        ) : null}
        <div className="cardFooter">
          <span className="cardFooter__timeStamp">{timeStamp}</span> —{" "}
          <span className="cardFooter__status">{status}</span>
          <img className="cardFooter__icon" src={trashIcon} alt="trash icon" />
        </div>
      </section>
    </>
  );
}
