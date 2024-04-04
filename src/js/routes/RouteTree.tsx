import { createRoute } from '@tanstack/react-router';
import {
  IndexComponent,
  ListComponent,
  ItemComponent,
} from '@/js/components/index.ts';
import { rootRoute } from './RootRoute.tsx';
import axios from 'axios';

/**
 * indexRoute
 */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData({
      queryKey: ['randomImage'],
      queryFn: async () => {
        let result;
        try {
          result = (
            await axios.get<{
              userId: string;
              id: string;
              body: string;
              title: string;
            }>('https://jsonplaceholder.typicode.com/posts/1')
          ).data;
        } finally {
          //
        }
        return result;
      },
    }),

  component: IndexComponent,
});

/**
 * listRoute
 */
const listRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/list',
  component: ListComponent,
});

/**
 * itemRoute
 */
const itemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/item/$id',
  component: ItemComponent,
});

/**
 * routeTree
 */
export const routeTree = rootRoute.addChildren([
  indexRoute,
  listRoute,
  itemRoute,
]);
