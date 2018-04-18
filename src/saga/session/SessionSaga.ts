/**
 * session相关服务
 */
import {AdminLoginReq} from "./req/AdminLoginReq";


export interface SessionSaga {

    login: (req: AdminLoginReq) => any;

    logout: (...p) => any;
}
