import React from "react";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Select,
  type FormProps,
} from "antd";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
  designation?: string;
};

const Login = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<LoginFormValues>["onFinish"] = (values) => {
    console.log("Received values of form: ", values);
    navigate("/");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6DBD44",
          colorBgContainer: "#FDFDFD",
        },
        components: {
          Input: {
            borderRadius: 12,
            colorBorder: "#E0E0E0",
          },
        },
      }}
    >
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="p-6 flex items-center gap-6">
          <img
            src="/WestfertLogo.png"
            alt="Logo"
            className="hidden md:block max-w-[550px] w-full"
          />
          <div className="shadow-lg rounded-4 !p-12 w-full md:min-w-[550px] bg-white">
            <h1 className="text-[24px] font-bold text-[#222222] pb-[24px]">
              Sign Up
            </h1>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label={
                  <label
                    htmlFor="Email"
                    className="text-[#636363] text-lg font-bold"
                  >
                    Email
                  </label>
                }
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your Email",
                  },
                ]}
              >
                <Input className="h-12 px-4" />
              </Form.Item>

              <Form.Item
                name="designation"
                label="Designation Type"
                initialValue="Admin /Manager"
              >
                <Select className="h-12">
                  <Select.Option value="Admin /Manager">
                    Admin/Manager
                  </Select.Option>
                  <Select.Option value="Sales Executive">
                    Sales Executive
                  </Select.Option>
                  <Select.Option value="Others ">Others</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label={
                  <label
                    htmlFor="Password"
                    className="text-[#636363] text-lg font-bold"
                  >
                    Password
                  </label>
                }
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password",
                  },
                ]}
              >
                <Input.Password className="h-12 px-4" placeholder="*********" />
              </Form.Item>

              <Form.Item>
                <Button
                  shape="round"
                  type="primary"
                  htmlType="submit"
                  style={{
                    height: 48,
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Login;
