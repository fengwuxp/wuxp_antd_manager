import React from 'react';
import * as styles from './PageHeaderLayout.less';
import {Link} from "react-router-dom";
import PageHeader, {PageHeaderProps} from "../../components/PageHeader/index";

export interface PageHeaderLayoutProps extends PageHeaderProps {


    wrapperClassName?: string;

    top?: any
}

export default (props: PageHeaderLayoutProps) => {

    const {children, wrapperClassName, top, ...restProps} = props;

    return <div style={{margin: '-22px -24px 0'}} className={wrapperClassName}>
        {top}
        <PageHeader key="pageheader" {...restProps} linkElement={Link}/>
        {children ? <div className={styles.content}>{children}</div> : null}
    </div>
}
