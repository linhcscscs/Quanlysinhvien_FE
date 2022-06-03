import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// const loginInfo = require ("../../loginInfo");
import { loginInfo, role } from "../../loginInfo";
import {
    EditFilled
} from '@ant-design/icons';
import axios from "axios";

export default function UserList() {
        const [data, setData] = useState([]);
        useEffect(() =>{axios.get(`http://localhost:4000/${role()}/qlsv/user/`, {headers: loginInfo()})
        .then(res => setData(res.data));
;},[])
            
        
        const handleDelete = (_id) => {
            setData(data.filter((item) => item._id !== _id));
        };
    
        const columns = [
            { field: "_id", headerName: "STT", width: 150 },
            { field: "userid", headerName: "MSV", width: 130 },
            {
                field: "name",
                headerName: "Họ tên",
                width: 200,
                renderCell: (params) => {
                    return (
                        <div className="userListUser">
                            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
                            {params.row.name}
                        </div>
                    );
                },
            },
            { field: "dob", headerName: "Ngày sinh", width: 150 },
            {
                field: "address",
                headerName: "Địa chỉ",
                width: 200,
            },
            {
                field: "action",
                headerName: "Hành động",
                width: 150,
                renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/user/" + params.row._id}>
                                <EditFilled className="userListEdit" />
                            </Link>
                            <DeleteOutline
                                className="userListDelete"
                                onClick={() => handleDelete(params.row._id)}
                            />
                        </>
                    );
                },
            },
        ];
    
        return (
    
            <div className="userList">
                <div> <Link to="/newUser">
                    <button className="userAddButton">Thêm sinh viên</button>
                </Link>
                </div>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={50}
                    getRowId ={(row) => row._id}
                />
            </div>
    
        );
}