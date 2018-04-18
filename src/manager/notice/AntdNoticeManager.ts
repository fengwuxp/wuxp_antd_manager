import AbstractNoticeManager from "wuxp_react_dynamic_router/src/manager/notice/AbstractNoticeManager";
// import ApiClientFetch from "typescript_api_sdk/src/api/impl/es/ApiClientFetch";

// const apiClientFetch = new ApiClientFetch(false);

/**
 * antd的消息管理器
 */
class AntdNoticeManager extends AbstractNoticeManager<Array<any>> {

    protected changeNoticeStatus: (...params) => void;

    protected initNotices = (): Promise<Array<any>>|Array<any> => {

        // return apiClientFetch.post({url: ""});
        return [];
    };

    protected updateNoticeByRemote: (...params) => void;


    clearNotices = (): void => {

    };

    handleNoticeVisibleChange = (): void => {

    }


}

export default new AntdNoticeManager();
