import React from "react";

export default function HeadFooter(props) {
  const { title, subtitle } = props.text;
  return (
    <section className="footer__header">
      <h2 className="footer__title">{title}</h2>
      <h3 className="footer__subtitle">{subtitle}</h3>
    </section>
  );
}
