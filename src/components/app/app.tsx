import { StackedLayouts } from 'components/shell';
import { MainContent } from 'routing/main-content';
import './app.css';

export const App = () => (
  <StackedLayouts>
    <MainContent />
  </StackedLayouts>
);
