import { StackedLayouts } from 'components/shell';
import { GuardAuthorization } from 'features/authorization';
import { MainContent } from 'routing/main-content';

export const App = () => {
  return (
    <GuardAuthorization>
      <StackedLayouts>
        <MainContent />
      </StackedLayouts>
    </GuardAuthorization>
  );
};
