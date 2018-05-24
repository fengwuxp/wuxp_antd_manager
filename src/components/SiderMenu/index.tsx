import 'rc-drawer-menu/assets/index.css';
import DrawerMenu from 'rc-drawer-menu';
import * as React from 'react';
import SiderMenu, {SiderMenuProps} from './SiderMenu';

export default (props: SiderMenuProps) => {

    let width = props.width | 256;

    return props.isMobile ? (
        <DrawerMenu
            parent={null}
            level={null}
            iconChild={null}
            open={!props.collapsed}
            onMaskClick={() => {
                props.onCollapse(false);
            }}
            width={`${width}px`}
        >
            <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed}/>
        </DrawerMenu>
    ) : (
        <SiderMenu {...props} />
    );
}

