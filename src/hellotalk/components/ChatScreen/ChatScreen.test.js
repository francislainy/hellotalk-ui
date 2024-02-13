import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatScreen from './ChatScreen';

test('renders chat with correct name', () => {
    render(<ChatScreen />);

    const nameElements = screen.getAllByText(/User 1/i);
    expect(nameElements.length).toBeGreaterThan(0);
});