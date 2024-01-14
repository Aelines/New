import React from 'react';

import ErrorBoundary, { ErrorBoundaryProps } from './errorBoundary';

const withErrorBoundary =
  <P extends object>(Component: React.ComponentType<P>, errorBoundaryProps: ErrorBoundaryProps) =>
  ({ ...props }: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

export default withErrorBoundary;
