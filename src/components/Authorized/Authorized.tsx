import React from 'react';
import CheckPermissions from './CheckPermissions';
import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';
import check from './CheckPermissions';


export default class Authorized extends React.Component<any, any> {

    public static Secured: any = Secured;

    public static AuthorizedRoute: any = AuthorizedRoute;

    public static check: any = check;

    render() {
        const {children, authority, noMatch = null} = this.props;
        const childrenRender = typeof children === 'undefined' ? null : children;
        return CheckPermissions(authority, childrenRender, noMatch);
    }
}
