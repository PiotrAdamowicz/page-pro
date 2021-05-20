import React, { useState } from "react";

import Icon from "./Icon";

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
      <div
        className={`${block}__icon ${block}__iconContainer`}
        style={{ height: "100%" }}
      >
        <Icon
          data={{
            block: "footer",
            icon: "comment-alt-smile.svg",
            text: "",
            id: 0,
          }}
        />
      </div>
      <span id={id} className={`${block}__text`}>
        {text}
      </span>
    </button>
  );
}
