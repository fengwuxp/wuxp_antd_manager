import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Authorized from './Authorized';
import {RouteProps} from "react-router";


type authorityFN = (currentAuthority?: string) => boolean;

export type authority = string | Array<string> | authorityFN | Promise<any>;

export interface AuthorizedRouteProps extends RouteProps {
    authority: authority;

    redirectPath?: string
}

export default class AuthorizedRoute extends React.Component<any, any> {
    render() {
        const {component: Component, render, authority, redirectPath, ...rest} = this.props;
        return (
            <Authorized
                authority={authority}
                noMatch={<Route {...rest} render={() => <Redirect to={{pathname: redirectPath}}/>}/>}
            >
                <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))}/>
            </Authorized>
        );
    }
}
