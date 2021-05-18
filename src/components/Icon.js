import React from "react";

import diagnosesIcon from "../icons/diagnoses.svg";
import commentDotsIcon from "../icons/comment-dots.svg";
import commentIcon from "../icons/comments.svg";
import chartPieIcon from "../icons/chart-pie.svg";
import cogIcon from "../icons/cog.svg";
import levelUpIcon from "../icons/level-up.svg";

const iconHandler = (icon) => {
  let res = "";
  switch (icon) {
    case "diagnoses.svg":
      res = diagnosesIcon;
      break;
    case "comment-dots.svg":
      res = commentDotsIcon;
      break;
    case "icons/comments.svg":
      res = commentIcon;
      break;
    case "icons/chart-pie.svg":
      res = chartPieIcon;
      break;
    case "icons/cog.svg":
      res = cogIcon;
      break;
    case "level-up.svg":
      res = levelUpIcon;
      break;
    default:
      break;
  }

  return res;
};

export default function Icon(props) {
  const { block, id, icon } = props.data;
  return (
    <img
      key={id}
      className={`${block}__icon`}
      src={iconHandler(icon)}
      alt="icon"
    />
  );
}
