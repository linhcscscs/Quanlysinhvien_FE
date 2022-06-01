import './Menu.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Trang chủ', '1', <Link to="/"><DesktopOutlined /></Link>),
    getItem('Sinh viên', 'sub1', <Link to="/users"><UserOutlined /></Link>,
        [
            getItem('', '2', <Link to="/users">Danh sách sinh viên</Link>),
            getItem('', '3', <Link to="/newUser">Thêm sinh viên</Link>),
            getItem('Đề xuất biểu mẫu', '4'),
            getItem('Ghi chú nhắc nhở', '5')
        ]),
    getItem('Học tập', 'sub2', <TeamOutlined />,
        [
            getItem('', '6', <Link to="/hoctap/diem" >Kết quả học tập</Link>),
            getItem('', '7', <Link to="/hoctap/lichhoc/canhan"> Lịch theo cá nhân</Link>),
            getItem('', '8', <Link to="/hoctap/lichhoc/toantruong"> Lịch toàn trường </Link>),
            getItem('Thông tin điểm danh', '9'),
            getItem('Điểm rèn Luyện', '10'),
        ]),
    getItem('Đăng kí học phần', 'sub3', <FileOutlined />,
        [
            getItem('Chương trình khung ', '11'),
            getItem('Đăng kí học phần', '12')
        ]),
    getItem('Học phí', 'sub4', <FileOutlined />,
        [
            getItem('Tra cứu công nợ ', '13'),
            getItem('Phiếu thu tổng hợp', '14'),
            getItem('', '15', <Link to="/list">Danh sách </Link>)
        ])
];

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                    maxWidth: '200px'
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
            </Layout>
        );
    }
}

export default () => <SiderDemo />;