import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat.js";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <div className="px-10 py-5 my-5 w-full flex gap-10">
        <div className="w-[60%]">
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="I Spit On Your Grave (2010) Full Slasher Film Explained in Hindi | Jennifer Summarized Hindi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="border w-[40%]">
          <LiveChat />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default WatchPage;
