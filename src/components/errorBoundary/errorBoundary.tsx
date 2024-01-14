import { Component, ReactNode, ErrorInfo } from 'react';

export interface ErrorBoundaryProps {
  fallback?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
  children?: ReactNode;
}
interface ErrorBoundaryState {
  error?: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback ? this.props.fallback : null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
