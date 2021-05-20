import React, { useState } from "react";

export default function Button(props) {
  const { text, id, block, focused = "" } = props.data;

  const [focus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(!focus);
  };

  return (
    <button
      id={`-${id}`}
      className={`${block}__btn ${
        focus ? `${block}__btn--focused` : ""
      } ${block}__${focused} ${focus ? `${block}__${focused}--focused` : ""}`}
      onBlur={focusHandler}
      onFocus={focusHandler}
    >
      <span id={id} className={`${block}__text`}>
        {text}
      </span>
    </button>
  );
}
