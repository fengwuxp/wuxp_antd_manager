import {Cell, Column, ColumnCellProps, Table} from "fixed-data-table-2";
import * as React from "react";
import FakeObjectDataListStore from "../hleper/FakeObjectDataListStore"
import {ColumnProps} from "antd/es/table";
import Button from "antd/lib/button/button";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";

const history = BrowserNavigatorFactory.get();

export default class FixedDataTableExample extends React.Component<any, any> {


    displayColumns: Array<ColumnProps<any>> = [
        {
            title: '操作',
            fixed: true,
            dataIndex: "operation",
            width: 140,
            render: (cellval, rowData, index) => {
                return (
                    <div style={{lineHeight: '50px'}}>
                        <Button type="primary"
                                icon="edit"
                                onClick={() => {
                                    history.push(`/sample/load?id=${rowData.id}`)
                                }}
                                size={"small"}>编辑</Button>
                    </div>
                )
            }
        },
        {
            title: 'ID',
            fixed: true,
            dataIndex: "id",
            width: 100,
            render: (cellval, rowData, index) => {
                return this.getCell(cellval, index)
            }
        },
        {
            title: '名称',
            dataIndex: "firstName",
            width: 100,
            render: (cellval, rowData, index) => {
                return this.getCell(cellval, index)
            }
        },
        {
            title: '名称2',
            dataIndex: "lastName",
            width: 100,
            render: (cellval, rowData, index) => {
                return this.getCell(cellval, index)
            }
        },
        {
            title: '城市',
            dataIndex: "city",
            width: 100,
            render: (cellval, rowData, index) => {
                return this.getCell(cellval, index)
            }
        },
        {
            title: '邮编',
            dataIndex: "street",
            width: 100,
            render: (cellval, rowData, index) => {
                return this.getCell(cellval, index)
            }
        }

    ];


    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
            columns: null,
            selectedRows: [],
        };
    }

    componentDidMount() {
        let dataListStore = new FakeObjectDataListStore(100);

        setTimeout(() => {
            console.log("数据加载完成");
            this.setState({
                dataList: dataListStore,
                columns: this.getTableColumns(dataListStore)
            });
        }, 1500)


    }

    handleRowMouseDown(rowIndex) {
        const {selectedRows} = this.state;

        let index = -1;
        let isExist = this.state.selectedRows.some((row, i) => {
            index = i;
            return row === rowIndex
        });


        if (isExist) {
            if (index > -1) {
                //移除选中
                selectedRows.splice(index, 1);
                this.setState({
                    selectedRows: selectedRows
                });
            }

        } else {
            selectedRows.push(rowIndex);

            this.setState({
                selectedRows: selectedRows
            });
        }
    }

    handleRowMouseUp() {
    }


    getTableColumns(dataListStore) {
        let startTime = new Date().getTime();
        let columns = [];
        let all = dataListStore.getAll();
        this.displayColumns.forEach((item, i) => {
            columns.push(
                <Column
                    align={"center"}
                    key={item.dataIndex}
                    columnKey={item.dataIndex}
                    flexGrow={2}
                    fixed={item.fixed as boolean}
                    header={<Cell>{item.title}</Cell>}
                    cell={(cell: ColumnCellProps) => {
                        let element = all[cell.rowIndex];
                        let text = element[cell.columnKey];
                        return item.render(text, element, cell.rowIndex) as any
                    }}
                    width={item.width}
                />);
        });
        console.log(`执行时间：${new Date().getTime() - startTime}`);
        return columns;
    }


    getCell(cellValue, rowIndex) {
        let isCellHighlighted = this.state.selectedRows.some((index) => index === rowIndex);

        let rowStyle = {
            backgroundColor: isCellHighlighted ? '#27a7ff' : 'transparent',
            width: '100%',
            height: '100%'
        };

        return <Cell style={rowStyle}>{cellValue}</Cell>
        // return <TextCell style={rowStyle}
        //                  data={this.state.dataList}
        //                  rowIndex={rowIndex}
        //                  columnKey={columnKey}/>;
    }

    render() {
        console.log("----------render");

        return <div>
            {this.state.columns === null ?
                <div>数据加载中..</div>
                :
                <Table
                    rowHeight={50}
                    headerHeight={50}
                    rowsCount={this.state.dataList.getSize()}
                    width={'100%'}
                    height={600}
                    onRowMouseDown={(event, rowIndex) => {
                        this.handleRowMouseDown(rowIndex);
                    }}
                    onRowMouseUp={(event, rowIndex) => {
                        this.handleRowMouseUp();
                    }}
                    {...this.props}>
                    {this.state.columns}
                </Table>}
        </div>
    }
}
