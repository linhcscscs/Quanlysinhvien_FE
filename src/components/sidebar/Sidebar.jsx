import "./Sidebar.css";
import {
    LineStyle,
    PermIdentity,
    Storefront,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Trang chủ
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>

                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quản lý sinh viên</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Thông tin chung
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Học tập
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Đăng kí học phần
                        </li>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />

                            Học phí
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quản lý giáo viên</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Thông tin chung
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Học tập
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Đăng kí học phần
                        </li>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />

                            Học phí
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Báo cáo</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Biểu mẫu
                        </li>
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}