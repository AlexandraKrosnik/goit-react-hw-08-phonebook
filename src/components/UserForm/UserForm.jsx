import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FormStyled, FormContainer } from './UserForm.styled';

export const UserForm = ({ operation }) => {
  const dispatch = useDispatch();
  const onSubmit = values => {
    if (operation === 'login') {
      dispatch(authOperations.logIn(values));
    } else if (operation === 'register') {
      const { name, email, password } = values;
      dispatch(authOperations.register({ name, email, password }));
    }
  };

  return (
    <FormContainer>
      <FormStyled
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        {operation === 'register' && (
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your UserName!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="name"
            />
          </Form.Item>
        )}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              validator: async (_, password) => {
                if (
                  !password ||
                  (password.length < 8 && operation === 'register')
                ) {
                  return Promise.reject(new Error());
                }
              },
              message: 'Please input your Password (min 8 characters)!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {operation === 'login' ? 'Log in' : 'Sign up'}
          </Button>
          Or
          {operation === 'login' && (
            <Link to={`/register`}> register now!</Link>
          )}
          {operation === 'register' && <Link to={`/login`}> login now!</Link>}
        </Form.Item>
      </FormStyled>
    </FormContainer>
  );
};
