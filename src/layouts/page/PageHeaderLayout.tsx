import React from 'react';
import * as styles from './PageHeaderLayout.scss';
import {Link} from "react-router-dom";
import {ReactBaseProps} from "wuxp_react_dynamic_router/src/model/model/ReactBaseProps";
import PageHeader from "../../components/PageHeader/index";

export interface PageHeaderLayoutProps extends ReactBaseProps {

    title?: string,

    content?: string;

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
