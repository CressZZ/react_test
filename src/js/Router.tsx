// 라우터 만들고

import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/js/routes/RouteTree.tsx';
import { queryClient } from './utils/queryClient.ts';

// Set up a Router instance
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  context: {
    queryClient: queryClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
