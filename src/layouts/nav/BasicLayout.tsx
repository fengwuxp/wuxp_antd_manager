import * as React from "react";
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from "react-container-query";
import classNames from 'classnames';
import MediaQuery from "./MediaQuery";
import AntdNavLayout, {AntdNavLayoutProps} from "./AntdNavLayout";
import {connect, MapStateToPropsParam} from "react-redux";
import {isNullOrUndefined} from "util";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import _ from "lodash";
import {antdMenuManager} from "../../manager/menu/AntdMenuManager";

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


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, menus, currentSelectedMenu}) => ({
    session,
    currentSelectedMenu,
    menus
});

@(connect as any)(mapStateToPropsParam)
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

    /**
     * 在渲染前调用,在客户端也在服务端
     */
    componentWillMount() {

        //加载菜单
        antdMenuManager.getMenus();


    }

    render() {

        const {menus} = this.props;
        const showMenu = menus && menus.length > 0;
        return (
            <DocumentTitle title={this.getPageTitle()}>
                {showMenu ? <ContainerQuery query={MediaQuery}>{params => <AntdNavLayout {...this.props}
                                                                                         className={classNames(params) as string}/>}</ContainerQuery> : null}
            </DocumentTitle>
        );
    }
}

