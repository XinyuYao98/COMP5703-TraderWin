import { Link, Outlet,useAppData, useLocation } from 'umi';
import styles from './index.less';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

export default function BasicLayouts() {
    const { clientRoutes } = useAppData();
    const location = useLocation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

  return (


      <Layout className="layout"
              route={clientRoutes[0]}
              location={location}
              // title={'Umi x Ant Design'}
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
              }}>

          <Header>
              <div className="logo" />
              {/*<Menu*/}
              {/*    theme="dark"*/}
              {/*    mode="horizontal"*/}
              {/*    defaultSelectedKeys={['2']}*/}
              {/*    items={new Array(15).fill(null).map((_, index) => {*/}
              {/*        const key = index + 1;*/}
              {/*        return {*/}
              {/*            key,*/}
              {/*            label: `nav ${key}`,*/}
              {/*        };*/}
              {/*    })}*/}
              {/*/>*/}
          </Header>
          <Content style={{ padding: '0 50px' }}>
              {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
              {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
              {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
              {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}
              <div className="site-layout-content" style={{ background: colorBgContainer }}>

              </div>
          </Content>
          <Outlet />
          <Footer style={{ textAlign: 'center' }}>CS28-2 ©2023 Created by G2 TEAM</Footer>
      </Layout>
  );
};

