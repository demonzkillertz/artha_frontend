import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;

const tasks = [
  {
    id: 1,
    name: 'Task 1',
  },
  {
    id: 2,
    name: 'Task 2',
  },
  {
    id: 3,
    name: 'Task 3',
  },
  {
    id: 4,
    name: 'Task 4',
  },
  {
    id: 5,
    name: 'Task 5',
  },
];

const users = [
  {
    id: 1,
    username: 'User 1',
  },
  {
    id: 2,
    username: 'User 2',
  },
  {
    id: 3,
    username: 'User 3',
  },
  {
    id: 4,
    username: 'User 4',
  },
  {
    id: 5,
    username: 'User 5',
  },
];

const projects = [
  {
    id: 1,
    name: 'Project 1',
  },
  {
    id: 2,
    name: 'Project 2',
  },
  {
    id: 3,
    name: 'Project 3',
  },
  {
    id: 4,
    name: 'Project 4',
  },
  {
    id: 5,
    name: 'Project 5',
  },
];

const WorkLogs = () => {
  const [form] = Form.useForm();
  const [rows, setRows] = useState([{}]);

  const handleSubmit = (values) => {
    // onSubmit(values);
    // form.resetFields();
  };

  const addRow = () => {
    setRows([...rows, {}]);
  };

  return (
    <div className="bg" style={{ padding: 20, backgroundColor: 'white' }}>
      <h1>
        <b>Work Logs</b>
      </h1>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        
      <Form.Item
          label="Project"
          name={[`project}`]}
          rules={[{ required: true, message: 'Please select a project' }]}
        >
          <Select placeholder="Select a project">
            {projects.map((project) => (
              <Option key={project.id} value={project.id}>
                {project.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Manager"
          name={[`user`]}
          rules={[{ required: true, message: 'Please select a user' }]}
        >
          <Select placeholder="Select a user">
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.username}
              </Option>
            ))}
          </Select>
        </Form.Item>
      


        {rows.map((row, index) => (
          <Row key={index} gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Task"
                name={[`task-${index}`]}
                rules={[{ required: true, message: 'Please select a task' }]}
              >
               <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item
          label="Worker"
          name={[`user`]}
          rules={[{ required: true, message: 'Please select a user' }]}
        >
          <Select
            mode="multiple"
            placeholder="Select users"
            style={{ width: '100%' }}
          >
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.username}
              </Option>
            ))}
          </Select>
        </Form.Item></Col>
          
          </Row>
        ))}
        <Form.Item>
          <Button type="primary" onClick={addRow}>
            Add Row
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default WorkLogs;
