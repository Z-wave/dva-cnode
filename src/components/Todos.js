import React from 'react';
import { Button, Input, Table, Divider,Row,Col } from 'antd';

const TodoList = ({ onDelete, onAdd, todolist, onChange, text, onUpdate }) => {
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'id',
  }, {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (todo) => <div>
      <a onClick={()=>onUpdate(todo.id)}>Edit</a>
      <Divider type='vertical'/>
      <a onClick={()=>onDelete(todo.id)}>Delete</a>
    </div>
  },];
  return (
    <div>
      <Row>
        <Col span={6}>
            <Input onChange={(e)=>onChange(e.target.value)} value={text}/> &nbsp;
        </Col>
        <Col span={4}>
            <Button onClick={()=>onAdd(text)} icon='plus' type='primary'>添加</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={todolist}/>
    </div>
  );
};

TodoList.propTypes = {

};

export default TodoList;