import * as React from "react";
import BaseSimpleDetailView, {BaseDetailViewState} from "../base/BaseSimpleDetailView";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {SampleInfo} from "./info/SampleInfo";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {Card} from "antd";
import DescriptionList from "ant-design-pro/lib/DescriptionList";
import Description from "ant-design-pro/lib/DescriptionList/Description";
import Divider from "antd/lib/divider";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";


interface DetailViewProps extends ReduxRouterProps {

}

interface DetailViewSate extends BaseDetailViewState<SampleInfo> {

}

/**
 * 详情页面例子
 */
export default class DetailView extends BaseSimpleDetailView<DetailViewProps, DetailViewSate, SampleInfo> {


    constructor(props: DetailViewProps, context: any) {
        super(props, context);
    }


    render() {
        const {info} = this.state;
        return <PageHeaderLayout title="sample详情">
            <Card bordered={false}>
                <DescriptionList size="large" title="例子信息" style={{marginBottom: 32}}>
                    <Description term="名称">{info.name}</Description>
                    <Description term="图标">
                        {StringUtils.hasText(info.name) ? <img style={{maxWidth: 80}} src={info.icon}/> : null}
                    </Description>
                    <Description term="活动url">{info.hdUrl}</Description>
                    <Description
                        term="发布时间">{MomentHelper.handlerMoment(info.publicDate, MomentFormatString.YYYY_MM_DD_HH_mm_ss)}</Description>
                    <Description term="是否启用">{info.enabled ? "启用" : "禁用"}</Description>
                </DescriptionList>
                <Divider style={{marginBottom: 32}}/>
                <DescriptionList size="large" title="活动介绍" style={{marginBottom: 32}}>
                    <pre>{info.description}</pre>
                </DescriptionList>
            </Card>
        </PageHeaderLayout>
    }
}
