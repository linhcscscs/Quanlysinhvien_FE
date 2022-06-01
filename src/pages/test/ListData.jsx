import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'email', headerName: 'NAME', width: 170 },
    { field: 'last_name', headerName: 'AGE', width: 170 },
];

export default function ListData() {
    const [data, setData] = React.useState([])

    const getList = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users?page=2');
            setData(res.data.data);
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        getList();
    }, [])

    return (
        <div style={{ height: 500, width: '80%' }}>
            <h4>How to use DataGrid Component in ReactJS?</h4>
            <DataGrid rows={data} columns={columns} pageSize={2} />
        </div>
    );
}