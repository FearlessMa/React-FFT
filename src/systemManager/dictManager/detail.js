/*
 * @Author: mhc 
 * @Date: 2018-05-04 16:51:33 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 18:15:35
 */


import React from 'react';
import { connect } from 'react-redux';
import { requestDictDetail } from '../redux/actions';
import { TableComponent } from 'common';

const mapStateToProps = state => ({
    dictDetail: state.systemManager.dictModule.dictDetail,
    dictLoading: state.systemManager.dictModule.loading,
});
const mapDispatchToProps = dispatch => ({
    dictDetailSaga: values => dispatch(requestDictDetail(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class DictDetailContainer extends React.Component {

    constructor(...arg) {
        super(...arg);
        const dictId = this.props.match.params.dictId;
        this.props.dictDetailSaga({ dictId });
    }

    goBack = () => {
        // this.props.history.push('')
        window.history.go(-1);
    }

    render() {

        const tablelColumns = [
            {
                title: '字典ID',
                dataIndex: 'dictId',
            },
            {
                title: '描述',
                dataIndex: 'dictDesc'
            },
            {
                title: '类别',
                dataIndex: 'dictClass'
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                render: (text) => <span>{text ? new Date(text).toLocaleString() : null}</span>
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
                render: (text) => <span>{text ? new Date(text).toLocaleString() : null}</span>
            },
            {
                title: '操作员ID',
                dataIndex: 'operator'
            }
        ]
        let data = [];
        try {
            data.push(this.props.dictDetail.data);
        } catch (e) { }
        return <React.Fragment>
            <DictDetailContent
                tablelColumns={tablelColumns}
                data={data}
                goBack={this.goBack}
                {...this.props}
            />
        </React.Fragment>
    }
}

const DictDetailContent = props => {
    return <React.Fragment>
        <div className="containerContent">
            <TableComponent
                columns={props.tablelColumns}
                dataSource={props.data}
                loading={props.dictLoading}
                componentTitle={'字典详情'}
                btnName={'返回'}
                btnClick={props.goBack}
                rowKey={'dictId'}
                bordered={true}
                pagination={false}
            />
        </div>
    </React.Fragment>
}