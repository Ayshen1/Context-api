import React from 'react'
import './style.scss'
import { Table } from 'antd'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
const Busket = () => {
  return (
    <div className='basket_body'>
     <div className='basket_container'>
     <Table  columns={columns} />;
     </div>
    </div>
  )
}

export default Busket