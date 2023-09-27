import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatDetails from './ChatDetails';

test('renders chat details with correct name and messages', () => {
    const chat = { name: 'User 1' };

    render(<ChatDetails chat={chat} />);

    const nameElement = screen.getByText(/User 1/i);
    expect(nameElement).toBeInTheDocument();

    const messageElement = screen.getByText(/Hello!/i);
    expect(messageElement).toBeInTheDocument();
});