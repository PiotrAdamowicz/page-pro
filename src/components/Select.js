import React from "react";
import chervonDownArrow from "../icons/chevron-down.svg";

export default function Select(props) {
  const { select, block, arrow } = props;

  return (
    <div className={block}>
      {select ? (
        <>
          <select className={`${block}__select`} defaultValue={select}>
            <option>{select}</option>
          </select>
          {arrow ? (
            <div className={`${block}__selectBtnContainer`}>
              <button className={`${block}__arrowBtn`}>
                <img
                  className={`${block}__icon ${block}__icon--up`}
                  src={chervonDownArrow}
                  alt="up arrow"
                />
                <img
                  className={`${block}__icon ${block}__icon--down`}
                  src={chervonDownArrow}
                  alt="down arrow"
                />
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
