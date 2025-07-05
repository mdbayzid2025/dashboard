import {
    Button,
    Checkbox,
    ConfigProvider,
    Form,
    Input,
    type FormProps
} from "antd";
import { BiCross } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

type LoginFormValues = {
    email: string;
    password: string;
    designation?: string;
};

const SetNewPassword = () => {
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
                <div className="p-6 flex items-center">
                    <img
                        src="/WestfertLogo.png"
                        alt="Logo"
                        className="hidden md:block max-w-[550px] w-full !mr-[90px]"
                    />
                    <div className="shadow-lg rounded-4 !p-12 w-full md:max-w-[550px]  bg-white">
                        <h1 className="text-[24px] !font-bold text-[#222222] !pb-[24px]">
                            Set a new password
                        </h1>
                        <p style={{fontSize: 18, color: "#6B6B6B", paddingRight: 20, marginBottom: 15}} className="">Create a new password. Ensure it differs from
                            previous ones for security</p>
                        <Form layout="vertical" onFinish={onFinish}>
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
                                <Input.Password  className="h-12 px-4" placeholder="*********" />
                            </Form.Item>
                            <Form.Item
                                dependencies={['password']}
                                label={
                                    <label
                                        htmlFor="Confirm Password"
                                        className="text-[#636363] text-lg font-bold"
                                    >
                                        Confirm Password
                                    </label>
                                }
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="h-12 px-4 " placeholder="*********" />
                            </Form.Item>               
                            <Form.Item>
                                <Button
                                    // shape="round"
                                    type="primary"
                                    htmlType="submit"
                                    style={{
                                        height: 48,
                                        width: "100%",
                                        fontWeight: 700,
                                        borderRadius: "16px",
                                        marginTop: 16,
                                    }}
                                >
                                    Update Password
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default SetNewPassword;
