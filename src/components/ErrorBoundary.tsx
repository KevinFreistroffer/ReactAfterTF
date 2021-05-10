import React, { Component, ErrorInfo } from 'react';
import Error from '../pages/Error';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const ErrorText = this.state.error ? (
        <>
          <dt>Error</dt>
          <dd>{this.state.error}</dd>
        </>
      ) : undefined;
      const ErrorInfoText = this.state.errorInfo ? (
        <>
          <dt>Error info:</dt>
          <dd>{this.state.errorInfo}</dd>
        </>
      ) : undefined;
      return (
        <Error>
          <h2 className='mb-l3'>Something went wrong!</h2>
          <h3>Details:</h3>
          <dl>
            {ErrorText}
            {ErrorInfoText}
          </dl>
        </Error>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
