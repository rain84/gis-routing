import { StackedLayouts } from 'components/shell';
import { GuardAuthorization } from 'features/authorization';
import { MainContent } from 'routing/main-content';
import './app.css';

export const App = () => (
  <GuardAuthorization>
    <StackedLayouts>
      <MainContent />
    </StackedLayouts>
  </GuardAuthorization>
);
