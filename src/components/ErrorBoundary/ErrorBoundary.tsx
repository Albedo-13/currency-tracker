import "./errorBoundary.scss";

import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: PropsWithChildren<ReactNode>;
};

type ErrorBoundaryState = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo && process.env.NODE_ENV !== "development") {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details className="error-b-details">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
