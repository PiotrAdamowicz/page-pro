import React from "react";
import Select from "../Select";
import Search from "../Search";

export default function HeaderMain(props) {
  const { select, title, subtitle } = props.text;
  return (
    <section className="mainHeader">
      <h1 className="mainHeader__title">{title}</h1>
      <h2 className="mainHeader__subtitle">{subtitle}</h2>
      <div className="mainHeader__inputs">
        <Select block="mainHeader" select={select} />
        <Search block="main" />
      </div>
    </section>
  );
}
