import { render, screen } from '@testing-library/react'
import { YetAnotherReactComponent } from './yet-another-react-component'

test('renders component-text', () => {
  render(<YetAnotherReactComponent />);
  const linkElement = screen.getByText(/yet-another-react-component/i);
  expect(linkElement).toBeInTheDocument();
});
