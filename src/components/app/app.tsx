import { Counter } from 'features/counter';
import { YetAnotherReactComponent } from 'components/yet-another-react-component';
import logo from './logo.svg';
import './app.css';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <YetAnotherReactComponent />
    </header>
  </div>
);
