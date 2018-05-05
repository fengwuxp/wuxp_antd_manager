import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {isNullOrUndefined} from "util";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";

export interface BaseDetailViewState<E> {

    /**
     * 要展示的info对象
     */
    info: E
}

/**
 * 简单的基础详情页面
 */
export default abstract class BaseSimpleDetailView<P extends ReduxRouterProps,
    S extends BaseDetailViewState<E>,
    E> extends React.Component<P, S> {


    protected fetchUrl: string;

    constructor(props: P, context: any) {
        super(props, context);

    }

    state = {
        info: {}
    } as S;

    componentWillMount() {
        if (isNullOrUndefined(this.fetchUrl)) {
            this.fetchUrl = this.props.location.pathname;
        }

        //获取查询参数
        let params = parse(this.props.history.location.search.split("?")[1]);

        //请求数据
        apiClient.post({
            url: this.fetchUrl,
            data: params,
            useFilter: false
        }).then((data: E) => {
            this.setState({
                info: data
            })
        }).catch((e) => {
            console.log(e);
        });
    }

}
