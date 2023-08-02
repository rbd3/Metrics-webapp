import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('renders NavBar component', () => {
  const { container } = render(<NavBar />);
  expect(container.innerHTML).toMatchSnapshot();
});
