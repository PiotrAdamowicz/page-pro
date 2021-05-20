import React, { useState } from "react";

export default function Select(props) {
  const { select, block } = props;

  const [focus, setFocus] = useState(false);
  const focusHandler = () => {
    setFocus(true);
  };
  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <>
      {select ? (
        <div
          onClick={focusHandler}
          onBlur={blurHandler}
          className={`${block}__selectContainer ${
            focus ? `${block}__selectContainer--focused` : ""
          }`}
        >
          <select
            onClick={focusHandler}
            className={`${block}__select`}
            defaultValue={select}
          >
            <option className={`${block}__selectOption`}>{select}</option>
          </select>
        </div>
      ) : null}
    </>
  );
}
