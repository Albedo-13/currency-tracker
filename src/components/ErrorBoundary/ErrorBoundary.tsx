import React, { ErrorInfo } from "react";
import "./errorBoundary.scss";

type TProps = {
  children: React.ReactNode;
};

type TState = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export default class ErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
