import React, { useEffect, useState} from "react";
import {
    LockOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Divider,
    Form,
    Input,
    Select,
    message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { SignupUser } from "../apicall/users";



const Signup = () => {
    const redirectUser = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const onFinish = async (values) => {
        try {
            const response = await SignupUser(values);

            if (response.success) {
                redirectUser("/login");
                message.success(response.message);
            } else {
                if(response.error){
                const message={}
                response.error.forEach((details)=>{
                    message[details.context.key]=details.message
                });
                setErrorMessages(message)
                }
                throw new Error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            redirectUser("/");
        }
    }, []);

    const validateusername = (_, value) => {
        const usernameRegex = /^(?=.*\d)[a-zA-Z\d]{6,20}$/;
        if (!usernameRegex.test(value)) {
          return Promise.reject(
            'Username must contain at least one digit.'
          );
        }
        return Promise.resolve();
      };

      const validatePhoneNumber = (_, value) => {
        const phoneNumberPattern = /^\d{11}$/;
        if (!phoneNumberPattern.test(value)) {
          return Promise.reject('Please enter a valid 10-digit phone number');
        }
        return Promise.resolve();
      };

      const validatePassword = (_, value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.?/;:'"}{\|=+])[a-zA-Z\d@$!%*?&,.?/;:}{'"\|=+]{8,20}$/;
        if (!passwordRegex.test(value)) {
          return Promise.reject(
            'Password must be at least 8 characters long'
            + ' ' +
            'and contain at least one uppercase letter,'+
            'one lowercase letter, and one digit and one special character.'
          );
        }
        return Promise.resolve();
      };

    return (
        <>
            <div className=" back  flex justify-center items-center ">
                
                    <div>
                        <div>
                            <h1 className="font-bold font-serif">Cookniverse</h1>
                        </div>

                        <Divider
                            className="font-bold font-serif text-2xl"
                            style={{ border: "red", borderWidth: "15px" }}
                        >
                            Signup
                        </Divider>  
                            <Form
                                layout="vertical"
                                onFinish={onFinish}
                                className="flex flex-col w-72 md:grid md:grid-cols-2 md:gap-2 md:w-[27rem] lg:w-[30rem] lg:gap-3"
                              
                            >
                                <Form.Item
                                    label="First Name"
                                    name="firstname"
                                    hasFeedback
                                    className="font-bold font-serif"
                                    help={errorMessages.firstname}
                                    rules={[
                                        {type:"string"},
                                        {required:true, message:"Please Enter Your First Name"},
                                        {whitespace:true}
                                    ]}   
                                >
                                    <Input
                                        placeholder="First Name"
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                        className="w-3/4"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Last Name"
                                    name="lastname"
                                    className="font-bold font-serif"
                                    hasFeedback
                                    help={errorMessages.lastname}
                                    rules={[
                                        {type:"string"},
                                        {required:true, message:"Please Enter Your First Name"},
                                        {whitespace:true}
                                    ]}
                                >
                                    <Input
                                        placeholder="Last Name"
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="User Name"
                                    name="username"
                                    className="font-bold font-serif"
                                    help={errorMessages.username}
                                    hasFeedback
                                    rules={[
                                        { required: true, message: 'Please enter your password' },
                                        {min:6,message:"minumum 6 character"},
                                        {max:20,message:"maximum 20 character"},
                                        { validator: validateusername },
                                    ]}
                                >
                                    <Input
                                        placeholder="User Name"
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    hasFeedback
                                    help={errorMessages.email}
                                    className="font-bold font-serif"
                                    rules={[
                                        {required:true,message:"Enter your email"},
                                        {type:"email",message:"Enter valid email"}
                                    ]}
                                >
                                    <Input
                                        placeholder="Email"
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    help={errorMessages.phone}
                                    hasFeedback
                                    className="font-bold font-serif"
                                    rules={[
                                        { required: true, message: 'Please enter your phone number' },
                                        { validator: validatePhoneNumber },
                                    ]}
                                >
                                    <Input
                                        style={{
                                            width: "100%",
                                            color: "black",
                                        }}
                                        placeholder="Phone Number"
                                        prefix={<PhoneOutlined className="site-form-item-icon" />}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    hasFeedback
                                    className="font-bold font-serif"
                                    help={errorMessages.password}
                                    rules={[
                                        { required: true, message: 'Please enter your password' },
                                        { validator: validatePassword },
                                      ]}
                                >
                                    <Input.Password
                                        placeholder="Password"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm Password"
                                    name="repeatpassword"
                                    dependencies={["password"]}
                                    help={errorMessages.repeatpassword}
                                    hasFeedback
                                    rules={[
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    new Error("Please enter Confirm Password!")
                                                );
                                            },
                                        }),
                                    ]}
                                    className="font-bold font-serif"
                                >
                                    <Input.Password
                                        placeholder="Confirm Password"
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        autoComplete="on"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Date Of Birth"
                                    name="dateofbirth"
                                    className="font-bold font-serif"
                                    help={errorMessages.dateofbirth}
                                    hasFeedback 
                                >
                                    <DatePicker />
                                </Form.Item>

                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    className="font-bold font-serif"
                                    help={errorMessages.gender}
                                    hasFeedback
                                    rules={[
                                        {required:true}
                                    ]}
                                >
                                    <Select placeholder="select your gender">
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Button
                                    htmlType="submit"
                                    className="mt-3 col-start-1 col-span-1 col-end-3"
                                >
                                    {" "}
                                    Signup{" "}
                                </Button>
                            </Form>
                            <div className="mt-5 text-center">
                                <span className="text-white font-semibold">
                                    Already have an Accunt?{" "}
                                    <Link
                                        className="text-orange-800 hover:underline hover:text-black"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </span>
                            </div>
                       
                    </div>
               
            </div>
        </>
    );
};

export default Signup;
