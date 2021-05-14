import React from "react";

export default function HeadFooter(props) {
  const { title, subtitle } = props.text;
  return (
    <section className="footer__header">
      <h1 className="footer__title">{title}</h1>
      <h2 className="footer__subtitle">{subtitle}</h2>
    </section>
  );
}
