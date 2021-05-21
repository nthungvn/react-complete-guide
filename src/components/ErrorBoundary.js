import classes from './ErrorBoundary.module.css';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3 className={classes.error}>There is no users</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
