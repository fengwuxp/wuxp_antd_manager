import Authorized from './Authorized';


/* eslint-disable import/no-mutable-exports */
let CURRENT = 'NULL';



/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
const renderAuthorize = currentAuthority => {
  if (currentAuthority) {
    if (currentAuthority.constructor.name === 'Function') {
      CURRENT = currentAuthority();
    }
    if (currentAuthority.constructor.name === 'String') {
      CURRENT = currentAuthority;
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default renderAuthorize;
