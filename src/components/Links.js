import React from "react";

const Links = (props) => {
  return (
    <a
      href={props.to}
      id={props.id}
      target="_blank"
      rel="noreferrer"
      title={props.title}
    >
      {props.children}
    </a>
  );
};

export default Links;
