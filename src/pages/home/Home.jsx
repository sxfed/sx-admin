import React, {Component} from 'react';
import {PageContent} from 'sx-ui/antd';
import './style.less';

export class LayoutComponent extends Component {
    state = {}

    componentWillReceiveProps(/* nextProps */) {
    }

    componentWillMount() {
        const {actions} = this.props;
        // actions.hidePageHeader();
        actions.hideSideBar();
        actions.setPageTitle('Home');
        actions.setPageBreadcrumbs([
            {
                key: 'zidingyi',
                path: '',
                text: '自定义',
                icon: 'cloud',
            },
            {
                key: 'mianbaoxie',
                path: '',
                text: '面包屑',
                icon: 'notification',
            },
            {
                key: 'daohang',
                path: '',
                text: '导航',
                icon: 'smile-o',
            },
        ]);
    }

    render() {
        return (
            <PageContent className="home">
                <h1>home123</h1>
            </PageContent>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state.frame,
    };
}
