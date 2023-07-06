import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="px-10 text-lg col-span-1 space-y-2 overflow-auto overflow-y-scroll scroll-smooth h-[83vh] w-72 ">
      <div className="border-b-2">
        <ul>
          <Link to="/">
            <li className="hover:bg-gray-100 rounded-md p-2">Home</li>
          </Link>
          <li className="hover:bg-gray-100 rounded-md p-2">Shorts</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Subscriptions</li>
        </ul>
      </div>
      <div className="border-b-2">
        <ul>
          <li className="hover:bg-gray-100 rounded-md p-2">Library</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Shopping</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Music</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Movies</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Live</li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="font-bold font-mono py-2">Explore</h1>
        <ul>
          <li className="hover:bg-gray-100 rounded-md p-2">Music</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Sports</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Gaming</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Movies</li>
        </ul>
      </div>
      <div className="border-b-2 text-gray-500">
        <ul>
          <li className="hover:bg-gray-100 rounded-md p-2">Setting</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Report History</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Help</li>
          <li className="hover:bg-gray-100 rounded-md p-2">Send Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
