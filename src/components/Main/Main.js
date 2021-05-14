import React from "react";
import CardMain from "./CardMain";
import HeaderMain from "./HeaderMain";

export default function Main() {
  const userQuerys = [
    {
      message:
        "Why haven’t I recieved my products yet, ordered more than a week ago?",
      select: "Could I have your invoice invoice_id?            ",
      timeStamp: "6 Minutes Ago",
      status: "Not Helpful",
      iconType: "red",
      id: 0,
    },
    {
      message:
        "Can we make this question turn up in questions for a better answer?",
      select: "Search Answers to train",
      timeStamp: "57 Minutes Ago",
      status: "Not Understood",
      iconType: "yellow",
      id: 1,
    },
    {
      message: "Do you offer money back guarantee?",
      select: "",
      timeStamp: "3 Hours Ago",
      status: "Not Understood",
      iconType: "yellow",
      id: 2,
    },
  ];
  const HeaderText = {
    select: "All (5)",
    title: "Questions",
    subtitle: "— Train the Bot to give better answers to asked questions",
  };
  return (
    <main className="main">
      <HeaderMain text={HeaderText} />
      <div className="mainGrid">
        {userQuerys.map((query) => {
          return <CardMain key={query.id} query={query} />;
        })}
      </div>
    </main>
  );
}
