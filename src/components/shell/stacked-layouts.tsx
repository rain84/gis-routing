import { Header } from './stacked-layouts.header';

const Main = ({ className, children }: FCProps) => (
  <main className={className}>
    <div className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 single-child-in-center">
      <div className="fle px-4 sm:px-0">
        <div className="border-4 border-dashed border-green-500 rounded-lg h-full">{children}</div>
      </div>
    </div>
  </main>
);

export const StackedLayouts = ({ children }: FCProps) => (
  <div className="min-h-full min-w-full flex flex-col">
    <Header className="flex-shrink" />
    <Main className="flex-grow single-child-in-center">{children}</Main>
  </div>
);
