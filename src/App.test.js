import React from "react";
import {render} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import App from './App';


describe("App", () => {
    it("renders favs", () => {
        const {getByText} = render(
            <MemoryRouter initialEntries={['/favs']}>
                <App/>
            </MemoryRouter>
        );

        const favs = getByText("Favorites");
        expect(favs).toBeInTheDocument();
    });

    it("renders cinemas", () => {
        const {getByText} = render(
            <MemoryRouter initialEntries={['/cinemas']}>
                <App/>
            </MemoryRouter>
        );

        const cinemas = getByText("Cinemas");

        expect(cinemas).toBeInTheDocument();
    })

    it("not found redirects to cinemas", () => {
        const {getByTestId, getByText} = render(
            <MemoryRouter initialEntries={['/favs']}>
                <App/>
            </MemoryRouter>
        )
        const favs = getByText("Favorites");
        expect(favs).toBeInTheDocument();

        let link = getByTestId("not-found-link")
        userEvent.click(link);

        const cinemas = getByText("Cinemas");
        expect(cinemas).toBeInTheDocument();
    })
})