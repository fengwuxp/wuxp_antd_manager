// use localStorage to store the authority info, which might be sent from server in actual project.

export function getAuthority() {
    console.log("---------");
    const currentMember = null;  //sessionManager.getCurrentMember();
    // return currentMember ? currentMember.name : 'admin';
    let authority = localStorage.getItem('antd-pro-authority'); //|| 'admin';
    console.log(authority);
    return authority;
}

export function setAuthority(authority) {
    console.log(`设置-->${authority}`);
    return localStorage.setItem('antd-pro-authority', authority);
}
