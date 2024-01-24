import { Button, Divider, Form, Input, message } from "antd";
// import bg from "/Images/signupbackground.jpg";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicall/users";
import Dividered from "../Components/Dividered";
import { useDispatch} from "react-redux";
import { SetLoader } from "../Redux/Slice/Loader";

const rules = [
  {
    required: true,
    message: "field required",
  },
];

const Login = () => {
  const loaderDispatch = useDispatch();
  const redirectUser = useNavigate();

  const onFinish = async (values) => {
    try {
      loaderDispatch(SetLoader(true));
      const response = await LoginUser(values);
      loaderDispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.token);
        redirectUser("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      loaderDispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      redirectUser("/");
    }
  }, []);

  return (
    <>
      <div className="flex justify-center relative items-center ">
        {/* <img src={bg} alt="" className="w-screen h-screen md:object-cover" /> */}
        <div>
          <div>
            <div>
              <h1 className="font-bold font-serif">Cookniverse</h1>
            </div>
            <Dividered />
            <div>
              <Divider
                className="font-bold font-serif text-2xl"
                style={{ border: "red", borderWidth: "15px" }}
              >
                Login
              </Divider>
            </div>
            <Dividered />
            <div>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Email" name="email" rules={rules}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={rules}>
                  <Input placeholder="Password" />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className=" submitbutton mt-3"
                >
                  {" "}
                  Login{" "}
                </Button>
                <div className="mt-5 text-center">
                  <span className="text-white font-semibold">
                    Don’t have an account?{" "}
                    <Link
                      className="text-yellow-800 hover:underline hover:text-black"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
