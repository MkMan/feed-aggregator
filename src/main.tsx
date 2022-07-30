import { MantineProvider } from '@mantine/core';
import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
