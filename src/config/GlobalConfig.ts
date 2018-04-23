import {ApiConfig} from "typescript_api_sdk/src/config/ApiConfig";


export default class GlobalConfig implements ApiConfig {


    //协议前缀
    SCHEMA_PREFIX: string = "http://";


    ROOT_DOMAIN: string = process.env.ROOT_DOMAIN;  //使用环境变量注入



    /**
     * web context
     */
    SITE_WEB_CONTEXT: string = "";

    /**
     * 图片服务地址
     * @type {string}
     */
    PIC_SERVICE_URL: string = this.SCHEMA_PREFIX + this.ROOT_DOMAIN;


    BASE_DOMAIN: string = "" + this.ROOT_DOMAIN;


    /**
     * 请求api的域名
     */
    API_BASE_URL: string = this.SCHEMA_PREFIX + this.BASE_DOMAIN+'/api' ;


}
