import * as React from "react";
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from "react-container-query";
import classNames from 'classnames';
import MediaQuery from "./MediaQuery";
import NavLayout from "./NavLayout";


export default class BasicLayout extends React.Component<any, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }


    getPageTitle() {

        let title = 'Ant Design Pro';
        return title;
    }

    render() {

        const currentUser = {
            notifyCount: 10
        };

        this.props.history.push("/login");

        return (
            <DocumentTitle title={this.getPageTitle()}>
                <ContainerQuery query={MediaQuery}>
                    {params => <NavLayout{...this.props} className={classNames(params) as string}/>}
                </ContainerQuery>
            </DocumentTitle>
        );
    }
}

