import React from "react"
import { Redirect, Route } from "react-router-dom"

export default class PrivateRoute extends React.Component {
    render() {
        const {component: Comp, ...rest} = this.props;
        return (
            <Route 
            {...rest} 
            render={() =>
                localStorage.getItem("user") ? (
                    <Comp />
                ) : (
                    <Redirect to="/login" />
                )}
            />
        );
    }
}