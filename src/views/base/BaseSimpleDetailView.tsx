import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {isNullOrUndefined} from "util";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {deepObjectGetterProxy} from "wuxp_react_dynamic_router/src/proxy/getter/DeepObjectGetterProxy";

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


    componentDidMount() {
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
            let key=this.findFormDataKey(data);
            this.setState({
                info: deepObjectGetterProxy<any>(data[key])
            })
        }).catch((e) => {
            console.log(e);
        });
    }

    /**
     * 查找 表单当前维护对象数据的key
     * @param data
     */
    protected findFormDataKey = (data: any) => {
        //TODO 完全匹配
        return Object.keys(data).find((key) => key.endsWith("Info"));
    }
}
