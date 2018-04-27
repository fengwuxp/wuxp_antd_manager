/**
 * 菜单匹配策略
 */
export interface MatchMenuKeyStrategy {

    /**
     * 匹配选中的菜单项
     * @param {Array<string>} flatMenuKeys
     * @param {string} path
     * @returns {string[]}
     */
    matchSelectKeys: (flatMenuKeys: Array<string>, path: string) => string[];
}

import pathToRegexp from 'path-to-regexp';


/**
 * 简单的匹配菜单策略
 * 获取菜单匹配的key
 * @param {Array<string>} flatMenuKeys
 * @param {string} path
 * @returns {string[]}
 */
export const SimpleMenuMatchStrategy: MatchMenuKeyStrategy = {
    matchSelectKeys: (flatMenuKeys: Array<string>, path: string): string[] => {
        let filter = flatMenuKeys.filter(item => {
            return pathToRegexp(item).test(path);
        });
        return filter;
    }
};


/**
 * 默认的的菜单匹配策略
 * @param {Array<string>} flatMenuKeys
 * @param {string} path
 * @returns {string[]}
 */
export const DefaultMenuMatchStrategy: MatchMenuKeyStrategy = {

    matchSelectKeys: (flatMenuKeys: Array<string>, path: string): string[] => {

        let p = path.split("?")[0];
        let items = p.split("/");
        let prefix = `/${items[1]}`;

        let filter = flatMenuKeys.filter(item => {
            let element = item.split("?")[0];
            if (pathToRegexp(item).test(p)) {
                return true;
            }

            if (element.endsWith("/list") && element.startsWith(prefix)) {
                return true;
            }
            return false;

        });
        return filter;
    }
};
