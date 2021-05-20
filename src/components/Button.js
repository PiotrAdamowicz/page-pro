import React, { useState } from "react";

export default function Button(props) {
  const { text, id, block, focused = "" } = props.data;

  const [focus, setFocus] = useState(false);
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);

  const focusHandler = () => {
    setFocus(!focus);
  };
  const countLikesHandler = () => {
    setCountLikes(countLikes + 1);
  };
  const countDislikesHandler = () => {
    setCountDislikes(countDislikes + 1);
  };

  return (
    <button
      id={`-${id}`}
      className={`${block}__btn ${
        focus ? `${block}__btn--focused` : ""
      } ${block}__${focused} ${focus ? `${block}__${focused}--focused` : ""}`}
      onBlur={focusHandler}
      onClick={focused === "like" ? countLikesHandler : countDislikesHandler}
      onFocus={focusHandler}
    >
      <span id={id} className={`${block}__text`}>
        {focused === "like" ? countLikes : null}
        {focused === "dislike" ? countDislikes : null}
        {() => {
          if (text === "like" || text === "dislike") {
            return null;
          } else {
            return text;
          }
        }}
      </span>
    </button>
  );
}
