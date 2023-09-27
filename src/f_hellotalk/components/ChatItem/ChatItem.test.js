import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatItem from './ChatItem';

test('renders chat item with correct text', () => {
    const chat = { name: 'User 1' };
    const message = { type: 'message', text: 'Hello!' };
    const index = 0;

    render(<ChatItem chat={chat} message={message} index={index} />);

    const messageElement = screen.getByText(/Hello!/i);
    expect(messageElement).toBeInTheDocument();
});