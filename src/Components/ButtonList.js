import React from "react";
import Button from "./Button";

const list = ["All", "React", "JavaScript", "Songs", "Gaming", "Cooking"];

const ButtonList = () => {
  return (
    <div className="flex gap-5">
      {list.map((item, i) => {
        return <Button name={item} key={`${i}-button`} />;
      })}
    </div>
  );
};

export default ButtonList;
