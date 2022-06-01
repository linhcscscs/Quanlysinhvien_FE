import React from 'react';
import Topbar from "../components/topbar/Topbar";
import "../App.css";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";
import MenuTap from '../components/menu.js/MenuTap';
import Diem from "../pages/hoctap/diem/Diem";
import LichHocTruong from "../pages/hoctap/lichhoc/LichHocTruong";
import TaiKhoan from '../login/tttk/TaiKhoan';
import ListDs from '../pages/test/ListDs';
import NewUserList from '../pages/test/NewUserList';

export default function Homeadmin() {
    return (
        <div>
            <Topbar />
            <div className="container">
                {/* <Sidebar /> */}
                <MenuTap />
                <Routes>
                    <Route exact path="/" element={<Home />} >
                    </Route>
                    <Route path="/taikhoan" element={<TaiKhoan />} >
                    </Route>
                    <Route path="/list" element={<ListDs />} >
                    </Route>
                    <Route path="/users" element={<UserList />}  >
                    </Route>
                    <Route path="/user/:userId" element={<User />}  >
                    </Route>
                    <Route path="/newUser" element={<NewUserList />} >
                    </Route>

                    <Route path="/hoctap/diem" element={<Diem />} >
                    </Route>
                    <Route path="/products" element={<ProductList />} >
                    </Route>
                    <Route path="/s" element={<MenuTap />} >
                    </Route>
                    <Route path="/hoctap/lichhoc/toantruong" element={<LichHocTruong />} >
                    </Route>
                    <Route path="/product/:productId" element={<Product />} >
                    </Route>
                    <Route path="/newproduct" element={<NewProduct />}  >
                    </Route>
                </Routes>
            </div>

        </div>
    )
}
