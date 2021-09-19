import React from "react"
import { Redirect, Route } from "react-router-dom"

export default class PublicRoute extends React.Component {
    render() {
        const {render: Comp, ...rest} = this.props;
        return (
            <Route 
            {...rest} 
            render={() =>
                !(localStorage.getItem("user")) ? (
                    <Comp />
                ) : (
                    <Redirect to="/" />
                )}
            />
        );
    }
}