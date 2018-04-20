import * as React from "react";
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from "react-container-query";
import classNames from 'classnames';
import MediaQuery from "./MediaQuery";
import AntdNavLayout, {AntdNavLayoutProps} from "./AntdNavLayout";
import {MapStateToPropsParam} from "react-redux";
import {ReactReduxConnect} from "wuxp_react_dynamic_router/src/decorator/ReactReduxConnect";
import {isNullOrUndefined} from "util";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import _ from "lodash";


const DEFAULT_TITLE = "Ant Design Pro";


function findMenuItemByPath(menus: Array<AntdMenuItem>, paths: Array<string>, i = 1): AntdMenuItem {

    let path = "";
    for (let index = 0; index <= i; index++) {
        path += paths[index] + "/";
    }
    path = path.substr(0, path.length - 1);
    let item = _.find(menus, {path: path});
    if (paths.length < -2 || isNullOrUndefined(item) || isNullOrUndefined(item.children)) {
        return item;
    }
    return findMenuItemByPath(item.children, paths, ++i);
}


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, menus}) => ({
    session,
    menus
});

@ReactReduxConnect(mapStateToPropsParam)
export default class BasicLayout extends React.Component<AntdNavLayoutProps, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }


    /**
     * 获取页面标题
     * @returns {string}
     */
    getPageTitle() {
        const {menus, location} = this.props;

        let title = DEFAULT_TITLE;
        if (isNullOrUndefined(menus)) {
            return title
        }
        const {pathname} = location;
        if (pathname === "/") {
            return title;
        }
        const paths = pathname.split("/");
        let menuItem: AntdMenuItem = findMenuItemByPath(menus, paths);
        if (isNullOrUndefined(menuItem)) {
            return title;
        } else {
            title = `${menuItem.name} - ${DEFAULT_TITLE}`;
        }

        return title;
    }

    render() {
        return (
            <DocumentTitle title={this.getPageTitle()}>
                <ContainerQuery query={MediaQuery}>
                    {params => <AntdNavLayout {...this.props}
                                              className={classNames(params) as string}/>}
                </ContainerQuery>
            </DocumentTitle>
        );
    }
}

