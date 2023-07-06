import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainComponent = () => {
  return (
    <div className="col-span-10 p-10 space-y-10">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainComponent;
