import React, { useEffect, useState } from "react";
import { API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

// higher component: takes in a component and returns a component
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap overflow-y-scroll h-[62vh]">
      <AdVideoCard
        info={{
          snippet: {
            channelTitle:
              "Learn from Colt Steele, Jose Portilla, Rob Percival, Andrei Neagoie, Angela Yu, & more.",
            title: "Rare Coupon: 100% Free Courses",
            thumbnails: {
              medium: {
                url: "https://lh3.googleusercontent.com/proxy/sqGcK6ekI1Qxlh734qvqCWWzwNFgSKyPJvXGWG8Tztj-9GKhK6QxXRaK_BPlcOYnhVZZR4r9p11Cbm9HdMU46fOoScu5s_4iDQHs3YsLJmh8N_HcFwip2OrQhzwZB0nJvK2KgIlI8G2H=w1152-h603-s-nd",
              },
            },
          },
        }}
      />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
