// NavBar.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('should render the NavBar component', () => {
    // Arrange
    const { getByAltText, getByText, getByTestId } = render(<NavBar />);

    // Assert
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText('Movie App')).toBeInTheDocument();
    expect(getByText('Movie App').tagName).toBe('H1');
    expect(getByAltText('logo')).toHaveAttribute('src', '\\assets\\cinema.jpg');

    expect(getByTestId('microphone-icon')).toBeInTheDocument();
    expect(getByTestId('sun-icon')).toBeInTheDocument();
  });
});
