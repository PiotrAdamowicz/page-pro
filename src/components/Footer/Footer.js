import React from "react";
import HeadFooter from "./HeadFooter";
import CardFooter from "./CardFooter";

export default function Footer() {
  const cards = [
    {
      title: "Do you offer money back guarantee?",
      subtitle: "Falloff — level 2",
      comments: 14,
      like: 14,
      dislike: 14,
      id: 0,
    },
    {
      title: "Not understood",
      subtitle:
        "For when your bot is not confident on how o answer the question.",
      comments: 14,
      like: 14,
      dislike: 14,
      id: 1,
    },
    {
      title: "Have my product shipped?",
      subtitle: "Yes, here’s your tracking id",
      comments: 14,
      like: 14,
      dislike: 14,
      id: 2,
    },
  ];
  const head = {
    title: "Improvements",
    subtitle:
      "— Based on conversations, these questions often requires a follow up",
  };

  return (
    <footer className="footer">
      <HeadFooter text={head} />
      {cards.map((card) => (
        <CardFooter key={card.id} data={card} />
      ))}
    </footer>
  );
}
