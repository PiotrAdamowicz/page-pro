import React from "react";
import Select from "../Select";

export default function HeaderMain(props) {
  const { select, title, subtitle } = props.text;
  return (
    <section className="main__header">
      <h1 className="main__title">{title}</h1>
      <h2 className="main__subtitle">{subtitle}</h2>
      <Select block="main" select={select} />
      <input className="main__select" type="select" />
      <input className="main__search" type="text" />
    </section>
  );
}
