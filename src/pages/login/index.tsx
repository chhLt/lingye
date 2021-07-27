import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import Cookies from "js-cookie";
import "./style.less"

const Login: React.FC = (props: any) => {
    const { history } = props;
    const onFinish = (values: any) => {
        const { username, password } = values;
        if (username === "admin" && password === "admin123456") {
            Cookies.set("user", "admin")
            history.push("/");
        } else {
            message.error("请输入正确的账号密码")
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className="Login">
            <section className="Login-aside">
                <p className='title'>领业装饰</p>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入账号' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }} size='large'>
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </section>
    );
}

export default Login;