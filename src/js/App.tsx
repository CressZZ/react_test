// App
import React, { StrictMode } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { router } from './Router.tsx';
import { queryClient } from './utils/queryClient.ts';

export default function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

        {/* Devtools */}
        <ReactQueryDevtools buttonPosition="top-right" />
      </QueryClientProvider>
    </StrictMode>
  );
}
