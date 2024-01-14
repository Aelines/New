import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import * as React from 'react';

import AppWrapper from '../appWrapper';

function render(
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult {
  return rtlRender(ui, { wrapper: AppWrapper as React.FunctionComponent, ...options });
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// override React Testing Library's render with our own
// eslint-disable-next-line import/export
export { render };
