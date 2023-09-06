import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // good idea to log this to an error reporting service like Sentry, Azure Monitor, New Relic, TrackJS, etc.
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing. <Link to="/">Click here to go back to the home page.</Link>
                </h2>
            );
        }
        return this.props.children;
    }

}

export default ErrorBoundary;