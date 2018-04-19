import 'rc-drawer-menu/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu, {SiderMenuProps} from './SiderMenu';
import {Icon, Spin} from "antd";


export default (props: SiderMenuProps) => {

    const showMenu = props.menus.length > 0;

    let component = null;

    let menuWidth = 256;

    if (showMenu) {
        component = props.isMobile ? (
            <DrawerMenu
                parent={null}
                level={null}
                iconChild={null}
                open={!props.collapsed}
                onMaskClick={() => {
                    props.onCollapse(true);
                }}
                width={props.width ? props.width : menuWidth}
            >
                <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed}/>
            </DrawerMenu>
        ) : (
            <SiderMenu {...props} />
        );
    } else {
        const antIcon = <Icon type="loading" style={{ fontSize: 32 }} spin />;

        component = <div className="style__sider-j00Mq ant-layout-sider"
                         style={{width: menuWidth,height:'100%',textAlign:'center'}}>
            <Spin style={{marginTop:260}} indicator={antIcon} />
        </div>
    }
    return component;
}

