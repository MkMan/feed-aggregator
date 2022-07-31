import { MantineProvider } from '@mantine/core';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
