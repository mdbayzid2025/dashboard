import { Button, ConfigProvider, Form, Input, type FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import type { GetProps } from "antd";

type LoginFormValues = {
  email: string;
  password: string;
  designation?: string;
};

type OTPProps = GetProps<typeof Input.OTP>;

const VerifyOTP = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<LoginFormValues>["onFinish"] = (values) => {
    console.log("Received values of form: ", values);
    navigate("/");
  };

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
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
          <div className="shadow-lg rounded-4 !p-12 w-full md:min-w-[550px] bg-white">
            <h1 className="text-[24px] !font-bold text-[#222222] !pb-[24px]">
              Confirm Verification Code
            </h1>
            <Form layout="vertical" onFinish={onFinish}>
              {/* <Form.Item
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
                <Input className="h-12 px-4" placeholder="tk@mymza.co.za" />
              </Form.Item> */}
              <Form.Item>
                <Input.OTP
                  {...sharedProps}                  
                  length={6} 
                  size="large"
                />
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
                  }}
                >
                  Sent Code In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default VerifyOTP;
