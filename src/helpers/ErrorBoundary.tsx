import React, { Component, ReactNode } from 'react';

interface State {
  hasError: boolean;
  errorMessage: string;
}

interface Props {
  children: ReactNode; 
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oups, quelque chose s'est mal passé !</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
