import { render, fireEvent, waitFor } from "@testing-library/react";
import Head from "../Head";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(["dummy", ["suggestions_dummy"]]),
  });
});

test("search suggestion working!", async () => {
  // eslint-disable-next-line
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Head />
      </Provider>
    </StaticRouter>
  );

  // eslint-disable-next-line
  const search = header.getByTestId("search-suggestion");
  // mocking up event
  await waitFor(() =>
    // eslint-disable-next-line
    fireEvent.change(search, {
      target: {
        value: "suggestion",
      },
    })
  );
  // eslint-disable-next-line
  expect(search.nodeName).toBe("INPUT");
});
