import InfoProvideService from "../../services/infoprovide/InfoProvideService";
import {QueryAreaReq} from "../../services/infoprovide/req/QueryAreaReq";
import {CascaderOptionType} from "antd/lib/cascader";

/**
 * 查询地区信息
 * @param {QueryAreaReq} params
 * @returns {Promise<CascaderOptionType[]>}
 */
export function queryAreaToCasaderOptions(params: QueryAreaReq): Promise<CascaderOptionType[]> {
    return InfoProvideService.queryArea({
        ...params,
        querySize: -1,
    }).then((data) => {
        const {records} = data;
        //数据转换
        return records.map(({id, name, level}) => {
            return {
                value: id,
                label: name,
                isLeaf: level >= 3
            };
        });
    });
}

/**
 * 加载地区信息
 * @param {CascaderOptionType[]} selectedOptions
 */
export function loadAreaToCasaderOptions(selectedOptions?: CascaderOptionType[]): Promise<void> {

    //上一个选中的选项
    const targetOption = selectedOptions[selectedOptions.length - 1];

    return queryAreaToCasaderOptions({
        parentId: targetOption.value,
    }).then((children) => {
        targetOption.children = children;
        this.setState({
            areaOptions: [...this.state.areaOptions],
        });
    }).catch((e) => {
        console.log("加载级联地区数据失败", e);
    });

}
