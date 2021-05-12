import React from "react";

export default function Select(props) {
  const { select, block } = props;
  console.log(select);
  return (
    <select className={`${block}__select`}>
      <option selected value={select}>
        {select}
      </option>
    </select>
  );
}
