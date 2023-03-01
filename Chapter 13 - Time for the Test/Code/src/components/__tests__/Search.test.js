import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store.js";
import {RESTAURANT_DATA} from "../../mocks/data.js"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json :() => {
            return Promise.resolve(RESTAURANT_DATA);
        } 
    })
});


test("Shimmer should load on Homepage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(10);
});

test("Restaurant should load on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);
});

test("Search for string(pizza) on Homepage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");

    //automatically type food in input box

    fireEvent.change(input, {
        target: {
            value: "pizza",
        },
    });

    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(0);
});