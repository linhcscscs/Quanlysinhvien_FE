
import React from "react";
import axios from 'axios';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './ListDs.css'
import { Link } from "react-router-dom";

class ListDs extends React.Component {

    state = {
        listUser: [],
        searchText: '',
        searchedColumn: '',
    };

    componentDidMount() {
        axios
            .get('http://localhost:4000/admin/qlsv/user/')
            .then(res => this.setState({ listUser: res.data }))
            .catch(err => console.log('err', err))
            ;
    }


    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {

        const columns = [
            {
                title: 'STT',
                key: 'userid',
                dataIndex: 'userid',
                width: 100,
                ...this.getColumnSearchProps('userid'),
            },
            {
                title: 'Họ tên',
                dataIndex: 'name',
                key: 'name',
                width: 150,
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Ngày sinh',
                dataIndex: 'dob',
                key: 'dob',
                width: 200,
                ...this.getColumnSearchProps('dob'),
            },
            {
                title: "Hành động",
                key: "action",

                width: 150,
                renderCell: (params) => {
                    return (
                        <>
                            <Link to={"/user" + params.row.id}>
                                <button className="userListEdit">Edit</button>
                            </Link>
                        </>
                    );
                },
            },
        ];

        let { listUser } = this.state;
        console.log(listUser);
        return (
            <div className="TableList">
                <Table columns={columns} dataSource={listUser} />
            </div>)

    }
}

export default ListDs;
