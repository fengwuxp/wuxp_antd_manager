// use localStorage to store the authority info, which might be sent from server in actual project.
import {sessionManager} from "../manager/session/SessionManager";

export function getAuthority() {
    console.log("---------")
    const currentMember = null;  //sessionManager.getCurrentMember();
    return currentMember ? currentMember.name : 'admin';
}

export function setAuthority(authority) {
    return localStorage.setItem('antd-pro-authority', authority);
}
