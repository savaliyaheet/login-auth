import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error Caught", error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div>Something Went Wrong</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
