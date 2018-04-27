import {isUrl} from '../utils/utils';
import {AntdMenuItem} from "../model/menu/AntdMenuItem";

const menuData: Array<AntdMenuItem> = [
    {
        name: '网站',
        icon: 'site',
        path: '',
        children: [
            {
                name: '示例',
                icon: 'form',
                path: 'sample',
                children: [
                    {
                        name: '示例列表',
                        path: 'list',
                    },
                    {
                        name: '富文本示例',
                        path: 'rich_text',
                    }
                ],
            },
        ]
    },
    {
        name: '商城',
        icon: 'site',
        path: '',
        children: [
            {
                name: '结果页',
                icon: 'check-circle-o',
                path: 'result',
                children: [
                    {
                        name: '成功',
                        path: 'success',
                    },
                    {
                        name: '失败',
                        path: 'fail',
                    },
                ],
            },
        ]

    },
    {
        name: "客户端",
        path: '',
        children: [
            {
                name: '异常页',
                icon: 'warning',
                path: 'exception',
                children: [
                    {
                        name: '403',
                        path: '403',
                    },
                    {
                        name: '404',
                        path: '404',
                    },
                    {
                        name: '500',
                        path: '500',
                    },
                    {
                        name: '触发异常',
                        path: 'trigger',
                        hideInMenu: true,
                    },
                ],
            }
        ]
    }

];


/**
 * push menu items
 * @param {Array<AntdMenuItem>} meuns
 */
export function pushMenus(meuns: Array<AntdMenuItem>) {
    menuData.push(...meuns);
}

export {
    menuData
}


/**
 * 将菜单进行转换
 * @param {Array<AntdMenuItem>} data
 * @param {string} parentPath
 * @param parentAuthority
 * @returns {Array<AntdMenuItem>}
 */
function formatter(data: Array<AntdMenuItem>, parentPath = '', parentAuthority?): Array<AntdMenuItem> {

    return data.map(item => {
        let {path, name} = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

export function getMenuData(menus: Array<AntdMenuItem> = []): Array<AntdMenuItem> {

    return formatter(menus);
}
