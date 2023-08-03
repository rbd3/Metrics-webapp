import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockMovies = [
  {
    id: 1,
    name: 'Movie 1',
    category: 'Action',
    rating: 8,
    image: 'image 1',
  },
  {
    id: 2,
    name: 'Movie 2',
    category: 'Comedy',
    rating: 6.5,
    image: 'image 1',
  },
];

jest.mock('../redux/movies/movieSlice', () => ({
  fetchAllMovies: () => ({ type: 'movies/fetchAllMovies', payload: mockMovies }),
}));

const mockStore = configureStore();

describe('Home', () => {
  it('renders movies list correctly', () => {
    const store = mockStore({
      movies: {
        Movies: mockMovies,
        isLoading: false,
        categories: ['Action', 'Comedy'],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
        <Home />
        </BrowserRouter>
        
      </Provider>,
    );

    const movie1Element = screen.getByText('Movie 1');
    const movie2Element = screen.getByText('Movie 2');

    expect(movie1Element).toBeInTheDocument();
    expect(movie2Element).toBeInTheDocument();
  });
});
