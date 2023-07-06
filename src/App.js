import "./App.css";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Head from "./Components/Head";
import Body from "./Components/Body";

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import MainComponent from "./Components/MainComponent";
// import WatchPage from "./Components/WatchPage";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

/**
 * Header
 * Body
 *    - Sidebar
 *        -MenuItems
 *    - Main Container
 *        -ButtonList
 *        -VideoContainer
 *        -VideoCard
 *
 */
export default App;
