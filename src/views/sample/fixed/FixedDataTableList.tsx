import {Table, Column, Cell, ColumnCellProps} from "fixed-data-table-2";
import * as React from "react";
import FakeObjectDataListStore from "../hleper/FakeObjectDataListStore"
import {ColumnProps} from "antd/es/table";
import Button from "antd/lib/button/button";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import BaseListView from "../../base/BaseListView";
import {SampleListProps, SampleState} from "../ListView";
import {QuerySampleReq} from "../req/QuerySampleReq";
import {SampleInfo} from "../info/SampleInfo";
import {SampleBuilder} from "../info/SampleBuilder";

const history = BrowserNavigatorFactory.get();

export default class FixedDataTableListextends extends BaseListView<SampleListProps, SampleState, QuerySampleReq,SampleInfo,SampleBuilder> {


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
