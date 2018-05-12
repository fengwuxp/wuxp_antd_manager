import React from 'react';
import {Link} from "react-router-dom";
import Exception from "ant-design-pro/lib/Exception";
import Button from "antd/es/button/button";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";

const history = BrowserNavigatorFactory.get();

export default () => (
    <Exception type="500" style={{minHeight: 500, height: '80%'}}
               actions={
                   <Button type="primary" onClick={() => {
                       history.goBack();
                   }
                   }>返回上一页</Button>
               }
               linkElement={Link}/>
);
