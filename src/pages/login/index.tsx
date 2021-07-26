import React, { } from 'react'
import { Button } from "antd";

const Login: React.FC = (props: any) => {
    const { history } = props;
    const toHome = () => {
        history.push("/layout/home")
    }
    return (
        <div className="Login">
            <Button type="primary" onClick={toHome}>首页</Button>
            <Button type="primary" onClick={toHome}>返回</Button>
        </div>
    );
}

export default Login;