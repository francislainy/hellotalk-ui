import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Navigation from './Navigation';
import Moments from "../screen/Moments";
import Live from "../screen/Live";
import MeScreen from "../screen/MeScreen";
import Home from "../screen/Home";

test('renders navigation links', () => {
    render(
        <BrowserRouter>
            <Router>
                <Route path="/moments" element={<Moments/>}/>
                <Route path="/connect" element={<Connect/>}/>
                <Route path="/live" element={<Live/>}/>
                <Route path="/me" element={<Me/>}/>
                <Route path="/" element={<Home/>}/>
            </Router>
        </BrowserRouter>
    );

    const homeLinkElement = screen.getByText(/Home/i);
    expect(homeLinkElement).toBeInTheDocument();

    const momentsLinkElement = screen.getByText(/Moments/i);
    expect(momentsLinkElement).toBeInTheDocument();

    const connectLinkElement = screen.getByText(/UserList/i);
    expect(connectLinkElement).toBeInTheDocument();

    const liveLinkElement = screen.getByText(/Live/i);
    expect(liveLinkElement).toBeInTheDocument();

    const meLinkElement = screen.getByText(/MeScreen/i);
    expect(meLinkElement).toBeInTheDocument();
});

describe('Navigation', () => {
    test('renders Navigation component', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        expect(screen.getByText('Hello Talk')).toBeInTheDocument();
        expect(screen.getByText('Moments')).toBeInTheDocument();
        expect(screen.getByText('Connect')).toBeInTheDocument();
        expect(screen.getByText('Live')).toBeInTheDocument();
        expect(screen.getByText('Me')).toBeInTheDocument();
    });
});