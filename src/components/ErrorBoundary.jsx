import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
            
            this.state = {
                hasError : false,
            };
        }

        static getDerivedStateFromError() {
            return {hasError:true};
        }

        componentDidCatch(error,info){
            console.log("Error caught:", error, info);
        }
        
        render() {
            if(this.state.hasError){
                return (
                    <div className="text-center p-6">
                        <h2 className="text-xl font-bold text-red-500">Something went wrong.</h2>
                        <p>Please refresh or try another city.</p>
                    </div>
                );
            }
            return this.props.children;
        }
    }
    export default ErrorBoundary;