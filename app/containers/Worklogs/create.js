import { Form, Input, Select } from 'antd';
import { UserEntity } from 'src/auth/entity/user.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { WorkLog } from 'src/worklogs/entities/worklog.entity';

const { Option } = Select;

interface CreateFormProps {
  users: UserEntity[];
  projects: Project[];
  tasks: Task[];
  onSubmit: (values: WorkLog) => void;
}

const CreateForm: React.FC<CreateFormProps> = ({
  users,
  projects,
  tasks,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: WorkLog) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="User"
        name="user"
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

      <Form.Item
        label="Project"
        name="project"
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
        label="Task"
        name="task"
        rules={[{ required: true, message: 'Please select a task' }]}
      >
        <Select placeholder="Select a task">
          {tasks.map((task) => (
            <Option key={task.id} value={task.id}>
              {task.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Start Time"
        name="startTime"
        rules={[{ required: true, message: 'Please select a start time' }]}
      >
        <Input type="datetime-local" />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="endTime"
        rules={[{ required: true, message: 'Please select an end time' }]}
      >
        <Input type="datetime-local" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
