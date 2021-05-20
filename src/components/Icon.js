import React, { useState, useEffect } from "react";

import diagnosesIcon from "../icons/diagnoses.svg";
import commentDotsIcon from "../icons/comment-dots.svg";
import commentIcon from "../icons/comments.svg";
import chartPieIcon from "../icons/chart-pie.svg";
import cogIcon from "../icons/cog.svg";
import levelUpIcon from "../icons/level-up.svg";
import commentSmileIcon from "../icons/comment-alt-smile.svg";

const iconHandler = (icon) => {
  let res = "";
  switch (icon) {
    case "comment-alt-smile.svg":
      res = commentSmileIcon;
      break;
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
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(props.isActive);
  }, [props.isActive]);
  const { id, icon, block } = props.data;
  return (
    <img
      key={id}
      id={id}
      className={`${block}__${block}Icon ${
        active ? `${block}__icon--active` : ""
      }`}
      style={active ? { transform: "scale(1)" } : null}
      src={iconHandler(icon)}
      alt="icon"
    />
  );
}
