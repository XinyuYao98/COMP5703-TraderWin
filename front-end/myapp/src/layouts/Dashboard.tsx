import React from 'react';
import {Avatar, Layout, Menu, Space, theme} from 'antd';
import {UserOutlined} from "@ant-design/icons-svg";

const { Header, Content, Footer } = Layout;
import { ProLayout } from '@ant-design/pro-layout';
import { Link, Outlet, useAppData, useLocation } from 'umi';
const {
    token: { colorBgContainer },
} = theme.useToken();

export default function DashboardLayout() {
    const { clientRoutes } = useAppData();
    const location = useLocation();
    return (
        <ProLayout
            route={clientRoutes[0]}
            location={location}
            title={'Umi x Ant Design'}
            headerRender={() => {
                return (
                    // 顶部部分
                    <div style={{ height: 64, background: '#f0f2f5' }}>

                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={[
                                {
                                    key: '1',
                                    label: 'FOREIGN EXCHANGE', // 更新标签名称为 'Home'
                                },
                                {
                                    key: '2',
                                    label: 'CRYPTOCURRENCY', // 第二个菜单项仍然是 'About Us'
                                },
                            ]}
                        />
                        <Space size={16} wrap>

                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Space>// 这里可以添加自定义的顶部内容
                    </div>
                );
            }}
            footerRender={() => {
                return (
                    // 底部部分
                    <div style={{ height: 48, background: '#f0f2f5' }}>
                        <Footer style={{ textAlign: 'center' }}>CS28-2 ©2023 Created by G2 TEAM</Footer>
                        // 这里可以添加自定义的底部内容
                    </div>
                );
            }}
            contentStyle={{ marginTop: 64, marginBottom: 48 }}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (menuItemProps.isUrl || menuItemProps.children) {
                    return defaultDom;
                }
                if (menuItemProps.path && location.pathname !== menuItemProps.path) {
                    return (
                        <Link to={menuItemProps.path} target={menuItemProps.target}>
                            {defaultDom}
                        </Link>
                    );
                }
                return defaultDom;
            }}
        >
            <div className="site-layout-content" style={{ background: colorBgContainer }}>
            </div>
            // 中间部分
            <div style={{ height: 'calc(100vh - 112px)', overflowY: 'auto' }}>
                <Outlet />
            </div>
        </ProLayout>
    );
}



