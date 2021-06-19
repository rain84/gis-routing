import { StackedLayouts } from 'components/shell';
import { Authorization } from 'features/authorization';
import { MainContent } from 'routing/main-content';

export const App = () => (
  <Authorization>
    <StackedLayouts>
      <MainContent />
    </StackedLayouts>
  </Authorization>
);
