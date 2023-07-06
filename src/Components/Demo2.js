import React, { useState, useRef } from "react";
// when we click on increasing x, it increases behind the scene but does not renders on the browser
// when we click on increasing y, it increases and renders the component which reinitialises the value of x to initial value even it was update before. So since we update our state our component rerenders.
const Demo2 = () => {
  let x = 0;
  const ref = useRef(0);
  const [y, setY] = useState(0);
  return (
    <div className="m-4 p-2 w-[400px] h-[400px] bg-slate-50 border border-black">
      <div>
        <h1 className="font-bold text-xl">{x}</h1>
        <button
          className="border bg-green-300 rounded-sm p-3"
          onClick={() => {
            x += 1;
            console.log(x);
          }}
        >
          Increase LET!! {x}
        </button>
        <button
          className="border bg-green-300 rounded-sm p-3"
          onClick={() => {
            setY(y + 1);
            console.log(x);
          }}
        >
          Increase STATE!! {y}
        </button>
        <button
          className="border bg-green-300 rounded-sm p-3"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref);
          }}
        >
          Increase REF!! {ref.current}
        </button>
      </div>
    </div>
  );
};

export default Demo2;
