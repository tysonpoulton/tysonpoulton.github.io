import React from "react";

const Skill = (props) => {
  return (
    <li className="text-center font-semibold text-xl">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img alt={props.name} src={props.src}></img>
        </a>
        <p>{props.name}</p>
    </li>
  );
};

export default Skill;