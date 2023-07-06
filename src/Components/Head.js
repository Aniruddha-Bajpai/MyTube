import React, { useState, useEffect } from "react";
import { openMenu, toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSearchStatus, setSearchStatus] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.cache);
  const toggleMenuHandler = () => {
    dispatch(openMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        if (searchCache[searchQuery]) setSuggestion(searchCache[searchQuery]);
        else getSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer); // called when our
    // API call

    // make an api call on every key press
    // but if the difference between two api calls is less than 200ms
    // then decline the API callcomponent rerenders or unmount
    /**
     * DEBOUNCING : programming practise used to ensure that time-consuming tasks do not fire so often.
     * key - i
     * -render
     * -useEffect
     *    -start timer and make api call after 200 ms
     * key - i=>p
     * - distroy component(useEffect return method)
     * -re-render
     * -useEffect
     *   - start a new timer and make api call after 200ms
     * setTimeout(200)
     */
  }, [searchQuery]);

  const getSuggestion = async () => {
    console.log("API CALL", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5  space-x-20 w-[100vw]">
      <div className="flex col-span-1 gap-8">
        <img
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
          onClick={() => dispatch(toggleMenu())}
        />
        <Link to="/">
          <img
            data-testid="logo"
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxZAG-f7O1nHsZZ1v5RuglbeTR7MlKnVWLI2POgOv_g&usqp=CAU&ec=48665701"
            alt="youtube"
            onClick={toggleMenuHandler}
          />
        </Link>
      </div>
      <div className="col-span-10 text-center relative">
        <div>
          <input
            data-testid="search-suggestion"
            type="search"
            className="w-1/2 border px-10 border-gray-400 rounded-l-full p-3"
            // onFocus={}
            value={searchQuery}
            onChange={(e) => {
              e.preventDefault();
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setSearchStatus(true)}
            onBlur={() => setSearchStatus(false)}
          />
          <button
            data-testid="search-btn"
            className="border bg-gray-100  border-gray-400 rounded-r-full p-2 mr-28 align-top"
          >
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_151815.png"
              alt="search"
              className="h-8 p-1"
            />
          </button>
        </div>
        {suggestion.length > 0 && showSearchStatus && (
          <div
            className="absolute left-[12rem] text-left bg-white w-[27rem] py-5 px-5 border shadow-lg rounded-lg"
            data-testid="suggestion-contain"
          >
            <ul className="space-y-2">
              {suggestion.map((s, i) => (
                <li
                  data-testid="suggestion-item"
                  className="border-b p-2 hover:bg-gray-100"
                  key={s + "-" + i}
                >
                  &#128269; &nbsp; {s}
                </li>
              ))}
              {/* <li className="border-b p-2 hover:bg-gray-100">
              &#128269; &nbsp; Iphone2
            </li>
            <li className="border-b p-2 hover:bg-gray-100">
              &#128269; &nbsp; Iphone2
            </li>
            <li className="border-b p-2 hover:bg-gray-100">
              &#128269; &nbsp; Iphone2
            </li> */}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 border rounded-full border-gray-400 my-2"
          src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
