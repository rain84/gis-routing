import { render } from '@testing-library/react';
import { store } from 'store';
import { Provider } from 'react-redux';

import { App } from './app';

test('app', () => {
  const Application = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(<Application />);
  expect(true).toBe(true);
});
