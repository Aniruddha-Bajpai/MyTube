import Head from "../Head";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Store from "../../utils/Store";
test("logo should load on rendering head", () => {
  // eslint-disable-next-line
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Head />
      </Provider>
    </StaticRouter>
  );
  // eslint-disable-next-line
  const logo = header.getAllByTestId("logo")[0];
  expect(logo.src).toBe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxZAG-f7O1nHsZZ1v5RuglbeTR7MlKnVWLI2POgOv_g&usqp=CAU&ec=48665701"
  );
});
