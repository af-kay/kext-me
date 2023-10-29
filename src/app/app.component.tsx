import { AppHeaderContent } from './app-header-content';
import { AppLayout } from './app-layout';
import { AppPagination } from './app-pagination';

export const App: React.FC = () => {
  return (
    <AppLayout headerContent={<AppHeaderContent />}>
      <AppPagination />
    </AppLayout>
  );
};
