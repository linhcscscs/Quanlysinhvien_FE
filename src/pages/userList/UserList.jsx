import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    EditFilled
} from '@ant-design/icons';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {

        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "STT", width: 150 },
        { field: "msv", headerName: "MSV", width: 130 },
        {
            field: "user",
            headerName: "Họ tên",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "birthday", headerName: "Ngày sinh", width: 150 },
        {
            field: "addres",
            headerName: "Địa chỉ",
            width: 200,
        },
        {
            field: "MK",
            headerName: "Khoá học",
            width: 150,
        },
        {
            field: "action",
            headerName: "Hành động",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <EditFilled className="userListEdit" />
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
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

            />
        </div>

    );
}