//后台首页需要使用的，包括公用的头部，公用的左侧等组件
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import styles from './SimpleLayout.scss';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

// console.log(styles);
class SimpleLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    // console.log(this.props);
    let { menus } = this.props;
    return (
      <Layout className={styles.nomal}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline">
            {menus.map(item => {
              return (
                <Menu.Item
                  key={item.id}
                  className={this.props.match.path === item.href ? 'ant-menu-item-selected' : ''}
                >
                  <Link to={item.href}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              );
            })}

            {/* <Menu.Item
              key="2"
              className={this.props.match.path === '/users/center' ? 'ant-menu-item-selected' : ''}
            >
              <Link to="/users/center">
                <Icon type="video-camera" />
                <span>个人页面</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              className={this.props.match.path === '/users/manages' ? 'ant-menu-item-selected' : ''}
            >
              <Link to="/users/manages">
                <Icon type="upload" />
                <span>基本信息</span>
              </Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default connect(({ global }) => {
  return {
    menus: global.menus,
  };
})(SimpleLayout);
