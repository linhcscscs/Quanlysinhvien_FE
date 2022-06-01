import React from 'react';
import './Diem.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { dataDiem } from '../../../dummyData';

const data = dataDiem;

class Diem extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

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
                key: 'stt',
                dataIndex: 'key',
                width: 100,
            },
            {
                title: 'Mã sinh viên',
                dataIndex: 'msv',
                key: 'msv',
                width: 150,
                ...this.getColumnSearchProps('msv'),
            },
            {
                title: 'Họ tên',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Lớp',
                dataIndex: 'lop',
                key: 'lop',
                width: 200,
                ...this.getColumnSearchProps('lop'),
            },
            {
                title: 'Khoa',
                dataIndex: 'khoa',
                key: 'khoa',
                width: 200,

            },

            {
                title: 'Điểm tổng kết',
                key: 'diemtk',
                dataIndex: 'diemtk',
                width: 150,
            },
            {
                title: 'Ghi chú',
                key: 'ghichu',
                width: 150,
            }
        ];
        return <div className='Diem'><Table columns={columns} dataSource={data} /></div>;
    }
}

export default Diem;