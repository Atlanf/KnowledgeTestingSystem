import React from "react";

interface IErrorState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IErrorState> {
    state: IErrorState;

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong...</h2>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}
