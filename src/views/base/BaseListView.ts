import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";

/**
 * base list view
 */
export default class BaseListView<P extends ReduxRouterProps, S> extends React.Component<P, S> {


    constructor(props: any, context: any) {
        super(props, context);
    }

    componentDidMount() {
        const {search, state} = this.props.history.location;
        const path = this.props.match.path;
        const params = parse(search);
        this.fetchListData(path, params);
    }


    /**
     * 加载列表数据
     * @param {string} url
     * @param params
     */
    public fetchListData = (url: string, params: any) => {
        apiClient.post({
            url,
            data: params
        }).then(() => {

        }).catch(this.fetchListDataFailure);
    };

    /**
     * 失败处理
     * @param e
     */
    public fetchListDataFailure = (e: any) => {

    };
}
