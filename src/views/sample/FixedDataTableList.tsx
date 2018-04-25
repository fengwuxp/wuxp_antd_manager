import {Table, Column, Cell, ColumnCellProps} from "fixed-data-table-2";
import * as React from "react";
import FakeObjectDataListStore from "./hleper/FakeObjectDataListStore"
import {ColumnProps} from "antd/es/table";
import Button from "antd/lib/button/button";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import BaseListView from "../base/BaseListView";
import {SampleListProps, SampleState} from "./ListView";

const history = BrowserNavigatorFactory.get();

export default class FixedDataTableListextends extends BaseListView<SampleListProps, SampleState, any> {


    protected getTableTile: (currentPageData: Object[]) => React.ReactNode;


    render() {

        return <div></div>
    }


}
