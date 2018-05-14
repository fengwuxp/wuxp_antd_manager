import * as React from "react";
import {ColumnProps} from "antd/es/table";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import BaseListView from "../../base/BaseListView";
import {SampleListProps, SampleListState} from "../ListView";
import {QuerySampleReq, QuerySampleReqBuilder} from "../req/QuerySampleReq";
import {SampleBuilder, SampleInfo} from "../info/SampleInfo";

const history = BrowserNavigatorFactory.get();

export default class FixedDataTableListextends extends BaseListView<SampleListProps,
    SampleListState,
    QuerySampleReq,
    QuerySampleReqBuilder,
    SampleInfo,
    SampleBuilder<SampleBuilder<any>>> {


    protected getTableTile: (currentPageData: Object[]) => React.ReactNode;


    constructor(props: SampleListProps, context: any) {
        super(props, context, {});
    }

    render() {

        return <div></div>
    }

    protected buildColumns: () => ColumnProps<SampleInfo>[];


    protected beforeSerialize: (req: any) => boolean;

    protected getQueryFrom: () => React.ReactNode;


}
