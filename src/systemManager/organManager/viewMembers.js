/**
 * Created by MHC on 2018/3/19.
 */
import React from 'react';
import {TableComponent} from "../../common/tableComponent";
import {Button} from 'antd';
import {connect} from 'react-redux';
import {requestOrgMembers, requestOrgRemoveMembers} from "../redux/actions";
import {Modal} from "antd/lib/index";


const mapStateToProps = (state) => ({
    orgMembersData: state.systemManager.organManager.detail.orgMembers,
    loading: state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    orgMembersSaga: valus => dispatch(requestOrgMembers(valus)),
    orgRmoveMembersSaga: values => dispatch(requestOrgRemoveMembers(values))
});

// export const ALS = ()=><div>1123</div>;
@connect(mapStateToProps, mapDispatchToProps)
export class ViewMembers extends React.Component {
    constructor(...arg) {
        super(...arg);
        // this.state = {
        //     orgName: ''
        // };
        const orgId = this.props.match.params.orgId;
        const orgName = this.props.match.params.name;
        this.orgName = orgName;
        if (isNaN(orgId)) {
            this.props.history.push('/systemManager/organManager');
        }
        this.props.orgMembersSaga({orgId});
    }


    btnClick = () => {
        this.props.history.go(-1);
    }

    //移除用户
    removeMembers = (userId, orgId) => {
        const that = this;
        Modal.confirm({
            title: `是否删除?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                that.props.orgRmoveMembersSaga({userId, orgId});
                // const hideLoading = message.loading('正在删除...', 0);
                // that.setState({
                //     hideLoading
                // })
            },
            onCancel() {
                //TODO
            },
        });
    }
    //分页
    paginationOnChange = pagination => {
        this.props.orgMembersSaga({current: pagination.current, pageSize: pagination.pageSize});
    }

    render() {
        const columns = [
            {
                title: '用户姓名',
                dataIndex: 'userName',
            },
            {
                title: '固定电话',
                dataIndex: 'telephone',
            },
            {
                title: '移动电话',
                dataIndex: 'mobile',
            },
            {
                title: '地址',
                dataIndex: 'userAddress',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: (text) => {
                    let show = text;
                    if (text === "NORMAL") {
                        show = "正常";
                    } else if (text === "CANCEL") {
                        show = "作废";
                    } else if (text === "LOCKED") {
                        show = "锁定";
                    } else {
                        show = text;
                    }
                    return (
                        <span>{show}</span>
                    )
                }
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    return (
                        <div>
                            <Button onClick={this.removeMembers.bind(this, record.userId, record.orgId)}
                                    type={'danger'} className='delBtn'>踢出</Button>
                        </div>
                    )
                }
            }
        ];

        return (
            <React.Fragment>
                <ViewMembersContent {...this.props} orgName={this.orgName} btnClick={this.btnClick}
                                    columns={columns} onChange={this.paginationOnChange}/>
            </React.Fragment>
        );
    }

}

const ViewMembersContent = props => {
    const {orgMembersData, btnClick, loading, columns} = props;
    let dataList = [];
    let pagination = [];
    try {
        dataList = orgMembersData.data.userList;
        pagination = orgMembersData.data.pagination;
    } catch (e) {
    }

    return (
        <React.Fragment>
            <div className='containerContent'>
                <TableComponent componentTitle={`${props.orgName}-机构下人员列表`} titleStyle={{fontSize: 15}}
                                columns={columns} bordered={true} rowKey={'orgId'} dataSource={dataList}
                                btnName={'返回'} btnClick={btnClick} loading={loading}
                                pagination={pagination}
                                {...props}
                />
            </div>
        </React.Fragment>
    )
}


