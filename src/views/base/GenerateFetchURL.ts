import {Location} from "history";

enum GenerateURLType {

    /**
     * 列表分页
     */
    PAGE = 'page',

    /**
     * 删除
     * @type {string}
     */
    DELETED = 'del',

    /**
     * 创建
     * @type {string}
     */
    CREATE = 'create',

    /**
     * 更新
     * @type {string}
     */
    UPDATE = 'edit'
}

/**
 * 生成请求列表页面的url
 */
export function generatePageURL() {

    return generateFetchURL(GenerateURLType.PAGE);
}

/**
 * 生成请求删除列表项的页面的url
 */
export function generateDeleteURL(): string {

    return generateFetchURL(GenerateURLType.DELETED);
}

/**
 * 生成创建提交的url
 */
export function generateCreateURL() {
    return generateFetchURL(GenerateURLType.CREATE);
}

/**
 * 生成编辑提交的url
 */
export function generateUpdateURL() {
    return generateFetchURL(GenerateURLType.UPDATE);
}

function generateFetchURL(type: string): string {

    return `/${window.location.pathname.split("/")[1]}/${type}`;
}
