import React, { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  // if we see here, when we writing anything on the input box then it will render the component as many times we write
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState();
  const prime = useMemo(() => {
    console.log("prime called");
    return findPrime(text);
  }, [text]); // now this will store the memoised value of the prime number
  // It also uses a dependency array so when we dont want it cache it when its dependent on something like here we need the prime to be called only when the text changes and then cache it.
  console.log("rendering -> " + text);
  // Now when I am toggling the theme, our render is also recalculating the prime value of the number n so why to do this expensive operation
  // such type of problems, we can utilise useMemo
  // the main use of useMemo is caching the result of the function  during rerenders.
  // useCallback is use to cache the function definition between rerenders
  return (
    <div
      className={`w-[400px] h-[400px] border border-red m-10 ${
        isDarkTheme && "bg-gray-900 text-white"
      }`}
    >
      <span
        className="bg-green-200 p-1 rounded"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Toggle
      </span>
      <h1 className="text-center p-5">Demo</h1>

      <div className={"text-center space-x-5"}>
        <label>Write here</label>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>nth Prime: {prime}</div>
    </div>
  );
};

export default Demo;
