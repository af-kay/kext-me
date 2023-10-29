import { Router } from 'wouter';

import { AppHeaderContent } from './app-header-content';
import { AppLayout } from './app-layout';
import { AppRouting } from './app-routing';

import { useHashLocation } from '$lib/routing';

export const App: React.FC = () => {
  return (
    <Router hook={useHashLocation}>
      <AppLayout headerContent={<AppHeaderContent />}>
        <AppRouting />
      </AppLayout>
    </Router>
  );
};
