import { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import Nav from './Nav.tsx';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

function RootComponent() {
  return (
    <>
      <Nav />
      <Outlet />

      {/* Devtools */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

const createCustomRootRoute = createRootRouteWithContext<{
  queryClient: QueryClient;
}>();

export const rootRoute = createCustomRootRoute({
  component: RootComponent,
});
