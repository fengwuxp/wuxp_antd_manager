// import * as React from "react";
//
//
// // import { observer /* , observable */ } from 'mobx-index';
//
// interface FixHeaderTableColumn {
//     // 列标题
//     title: string;
//     // 数据字段名
//     key?: string;
//     // 自定义渲染列
//     render?: React.ReactNode;
//     // 列宽度
//     width?: number | string;
// }
//
// interface FixHeaderTableProps {
//     // 表格列描述
//     columns: FixHeaderTableColumn[];
//     // 表格数据
//     data: {
//         [index: string]: any
//     }[];
// }
//
// class FixHeaderTable extends React.Component<FixHeaderTableProps, any> {
//     // class前缀
//     // static Prefix = 'sp__table';
//
//     private select: number = 0;
//
//     // @observable private selecteIndexs: number[] = [];
//     constructor(props: FixHeaderTableProps) {
//         super(props);
//         // this.state = { selecteIndexs: [] };
//     }
//
//     /**
//      * 单选表格行
//      * @param index 表格行数
//      */
//     public ActiveTableRow(index: number) {
//         const {data} = this.props;
//         if (index < 0 || index >= data.length) {
//             return;
//         }
//         console.log('setState 设置当前选中索引', index);
//         // this.setState({selecteIndexs: [index]});
//         this.select = index;
//         this.forceUpdate();
//     }
//
//     // 渲染
//     public render() {
//         console.log('开始表格渲染');
//         return (
//             <div className="box">
//                 <div className="wrap">
//                     {this.TableBody()}
//                 </div>
//             </div>
//         );
//     }
//
//     public componentWillReceiveProps() {
//         console.log('componentWillReceiveProps');
//     }
//
//     public componentWillUpdate() {
//         console.log('即将更新');
//         console.time('a');
//     }
//
//     public componentDidUpdate() {
//         console.log('更新完毕'/* , this.state.selecteIndexs */);
//         console.timeEnd('a');
//     }
//
//     // 表格列宽度组
//     private TableColGroup() {
//         const {columns} = this.props;
//         console.log('遍历数据渲染表格列');
//         return (
//             <colgroup>
//                 {columns.map((column, i) => (<col key={i} width={column.width}/>))}
//             </colgroup>
//         );
//     }
//
//
//     // 表格行
//     private TableRows() {
//         const {data} = this.props;
//         console.log('遍历数据渲染表格行',data.length);
//         return data.map((item, i) => {
//             const selected = this.select === i;
//             return (
//                 <tr key={i} className={`tr ${selected ? 'selected' : ''}`} onClick={() => {
//                     this.ActiveTableRow(i);
//                 }}>
//                     {this.TableCols(item)}
//                 </tr>
//             );
//         });
//     }
//
//     // 表格列
//     private TableCols(item: { [index: string]: any; }) {
//         return this.props.columns.map((col, colIndex) => {
//             if (!col.key) {
//                 return null;
//             }
//             const value = item[col.key];
//             return (<td className="td" key={colIndex}>{value}</td>);
//         });
//     }
//
//     // 表格体
//     private TableBody() {
//         // const { data } = this.props;
//         return (
//             <table>
//                 {this.TableColGroup()}
//                 <tbody>
//                 {this.TableRows()}
//                 </tbody>
//             </table>
//         );
//     }
//
//     shouldComponentUpdate(nextProps: Readonly<FixHeaderTableProps>, nextState: Readonly<any>, nextContext: any) {
//
//         console.log("shouldComponentUpdate", nextState);
//
//         return true;
//     }
//
// }
//
// export default function () {
//     const columns: FixHeaderTableColumn[] = [
//         {
//             title: "id",
//             key: "id",
//             width: 100
//         },
//         {
//             title: "name",
//             key: "name",
//             width: 100
//         }
//     ];
//
//     const data = [];
//
//     for (let i=0; i < 5000; i++) {
//         data.push(
//             {
//                 id: i,
//                 name: "测试：" + i
//             }
//         )
//     }
//     console.log("列表数据大小",data)
//     return (
//         <FixHeaderTable columns={columns} data={data}/>
//     )
// }
