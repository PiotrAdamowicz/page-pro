/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import lightbulbIcon from "../../icons/lightbulb.svg";

import Icon from "../Icon";
import Button from "../Button";
import RatingButton from "../RatingButton";

export default function FooterFooter(props) {
  const [isActive, setActive] = useState(false);

  const clickHandler = () => {
    setActive(true);
  };
  const commentBlurHandler = () => {
    setActive(false);
  };

  const { title, subtitle, comments, like, dislike, id } = props.data;

  const buttons = [
    { id: 1, text: like, block: "footer", focused: "like" },
    { id: 2, text: dislike, block: "footer", focused: "dislike" },
    { id: 3, text: "", block: "footer", focused: "expand" },
  ];
  return (
    <>
      <section className={`footer__footer footer__footer${id}`}>
        <button
          className={`footer__comment ${
            isActive ? "footer__comment--active" : ""
          }`}
          onClick={clickHandler}
          onBlur={commentBlurHandler}
        >
          <h2 className="footer__title">
            <img
              className="footer__bulb"
              src={lightbulbIcon}
              alt="red comment icon"
            />
            {title}
          </h2>
          <h3
            className={`footer__subtitle ${
              isActive ? "footer__subtitle--active" : ""
            }`}
          >
            {isActive ? (
              <Icon
                data={{
                  block: "footer",
                  icon: "level-up.svg",
                  text: "",
                  id: 0,
                }}
              />
            ) : null}
            {subtitle}
          </h3>
        </button>
        <div className="footer__stats">
          <RatingButton
            key="-0"
            data={{ id: 0, text: comments, block: "footer", focused: "rating" }}
          />

          {buttons.map((button) => {
            return <Button key={button.id} data={button} />;
          })}
        </div>
      </section>
    </>
  );
}
