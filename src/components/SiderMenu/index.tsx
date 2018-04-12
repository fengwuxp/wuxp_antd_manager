import 'rc-drawer-menu/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu, {SiderMenuProps} from './SiderMenu';


export default (props: SiderMenuProps) =>
    props.isMobile ? (
        <DrawerMenu
            parent={null}
            level={null}
            iconChild={null}
            open={!props.collapsed}
            onMaskClick={() => {
                props.onCollapse(true);
            }}
            width={props.width ? props.width : 256}
        >
            <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed}/>
        </DrawerMenu>
    ) : (
        <SiderMenu {...props} />
    );
