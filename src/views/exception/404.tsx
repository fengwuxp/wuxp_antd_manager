import React from 'react';
import Exception from "ant-design-pro/lib/Exception";
import {Link} from "react-router-dom";
import Button from "antd/es/button/button";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
const history = BrowserNavigatorFactory.get();


export default () => (
    <Exception type="404" style={{minHeight: 500, height: '80%'}}
               actions={
                   <React.Fragment>
                       <Button type="primary"
                               onClick={() => {
                           history.goBack();
                       }
                       }>返回上一页</Button>
                       <Button type="dashed"
                               style={{marginLeft:10}}
                               onClick={() => {
                           // location.href="/index"
                       }
                       }>回到首页</Button>
                   </React.Fragment>
               }
               linkElement={Link}/>
);
