import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { message } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import Cookies from "js-cookie";
import axios from "axios";
interface routeArgs extends RouteComponentProps {
    path: string,
    component: React.LazyExoticComponent<any>,
    exact?: boolean,
    strict?: boolean,
    replace?: boolean,
}
const PrivateRoute: React.FC<routeArgs> = (props: any) => {
    const {
        path = "/",
        exact = false,
        component: Component,
        strict = false,
    } = props;
    let ws;
    let httpUrl = "http://websocket.sendcmd.com";
    let wsUrl = "ws://websocket.sendcmd.com:9004";
    // let httpUrl = "http://192.168.3.17:9004";
    // let wsUrl = "ws://192.168.3.17:9004";
    let currentUserList: any = useRef()
    let currentUserActive: any = useRef() // 选中的聊天用户
    let currentChatList: any = useRef() // 用户聊天列表
    const [userList, setuserList] = useState<Array<any>>() // 客服聊天列表
    const [chatList, setchatList] = useState<Array<any>>() // 用户聊天列表
    // const [sessionIds, setsessionIds] = useState<Array<any>>()
    const [userActive, setuserActive] = useState<string | undefined>();
    const [userName, setuseruserName] = useState<string | undefined>();
    const [adminUser] = useState(Cookies.get("user"))
    const [msg, setmessage] = useState<any>("")
    const [myID, setmyID] = useState<string>()
    const onClickSelectUser = (item: any): void => {
        setuserActive(item.key);
        currentUserActive.current = item.key;
        currentUserActive.current = item.key;
        setuseruserName(item.userName)
    }
    useEffect(() => {
        if (adminUser === 'admin') {
            onopen(adminUser);
            let _userList = sessionStorage.getItem('userList')
            if (_userList !== null) {
                setuserList(JSON.parse(_userList))
            }
        } else {
            let key = sessionStorage.getItem('myID')
            let _currentChatList = sessionStorage.getItem('currentChatList')
            if (key) {
                setmyID(key)
                onopen(key);
                if (_currentChatList) {
                    currentChatList.current = JSON.parse(_currentChatList);
                    setchatList(JSON.parse(_currentChatList))
                }
            } else {
                getNewUser()
            }
        }
    }, [])
    useEffect(() => {

    }, [chatList])

    useEffect(() => { // 客服初始化
        if (!userName && !userActive && userList && adminUser === 'admin') {
            // debugger
            console.log(userList[0].userName);
            let userName = userList[0].userName
            let key = userList[0].key
            currentUserActive.current = key;
            currentUserActive.current = userName;
            setuserActive(userList[0].key);
            setuseruserName(userList[0].userName)
        }
    }, [userList])

    /**
     * 不是admin 生成新用户
     * @param  
     */
    const getNewUser = () => {
        let url = httpUrl + "/chat/getRoomProof";
        axios.get(url).then(response => {
            let res = response.data;
            if (200 === res.success) {
                setmyID(res.data)
                sessionStorage.setItem('myID', res.data)
                onopen(res.data);
            }
        });
    }
    /*
     * 加入到房间
     */
    const onopen = (proof: string) => {
        // let addRoomUrl = 'ws://127.0.0.1:9004/chat-room/' + proof;
        let addRoomUrl = wsUrl + '/chat-room/' + proof;
        ws = new WebSocket(addRoomUrl);

        // 连接
        ws.onopen = () => {
            console.log("[" + proof + "] 加入连接...");
        };

        // 接收消息
        ws.onmessage = (event) => {
            // 服务端发送的消息
            let dto = JSON.parse(event.data);
            // flag
            const { sender, message, flag } = dto;
            if (adminUser === 'admin') { // 客服
                let _userList = currentUserList.current || [];
                const { state, index } = isExistUser(sender, _userList);
                if (flag === 0) { // 聊天

                }
                if (flag === 1 && sender !== "admin") { // 进入聊天
                    if (_userList.length === 0 || !state) { // 没有用户 或者 不在用户列表中
                        _userList.unshift({ key: sender, flag, userName: sender, charList: [{ sender: "admin", message: '你好' }] })
                    }
                    if (state) { // 存在用户列表中 
                        _userList[index].flag = flag
                    }
                }
                if (flag === 2) { //离开 
                    if (_userList.length !== 0) {
                        let leave = _userList.splice(index, 1)[0];
                        leave['flag'] = flag;
                        _userList.push(leave)
                    }
                }
                if (_userList.length !== 0) {
                    currentUserList.current = _userList;
                    sessionStorage.setItem("userList", JSON.stringify(_userList));
                    setuserList([..._userList])
                }
            } else { // 用户
                let _currentChatList = currentChatList.current || [];
                if (flag === 0) { // 聊天
                    _currentChatList.push({ sender, message });
                }
                if (flag === 1 && !sessionStorage.getItem('currentChatList')) { // 进入聊天
                    _currentChatList.push({ sender: "admin", message: '你好' })
                }
                currentChatList.current = _currentChatList;
                setchatList([..._currentChatList])
                sessionStorage.setItem("currentChatList", JSON.stringify(_currentChatList));
            }
        };

        // 关闭连接
        ws.onclose = () => {
            // $('#message_content').append('[' + proof + '] 离开了聊天室!');
            // console.log("[" + proof + "] 退出连接...");
        }
    }
    // 判断用户是否存着客户聊天列表
    const isExistUser = (key: string, userList: any) => {
        let state = false, index = 0;
        userList.forEach((element: any, idx: number) => {
            if (element.key === key) {
                state = true;
                index = idx;
            }
        });
        return { state, index };
    }
    // 发送消息
    const sendMessage = () => {
        if (!msg) {
            message.error("请输入消息内容");
            return false
        }
        let sendToHimUrl: string;
        let param: any;
        if (adminUser === "admin") {
            sendToHimUrl = httpUrl + '/chat/admin/sendToHim'
            param = {
                who: userActive,
                msg: msg
            }
        } else {
            sendToHimUrl = httpUrl + '/chat/' + myID + '/sendToHim'
            param = {
                who: "admin",
                msg: msg
            }
        }
        axios.post(sendToHimUrl, param).then((response: { data: any; }) => {
            let res = response.data;
            if (200 === res.success) {
                // 清空发送的消息
                setmessage("")
            } else {
                setmessage("")
                message.error(res.message)
            }
        })
    }
    // 连接的是哪个客服
    // const getCustomerService = (sessionIds: any) => {
    //     let cName: string = "";
    //     if (sessionIds) {
    //         sessionIds.forEach((element: any) => {
    //             if (element.indexOf("admin") !== -1) {
    //                 cName = element
    //             }
    //         });
    //     }
    //     return cName;
    // }
    const config = {
        userList,
        userActive,
        onClickSelectUser,
        userName,
        adminUser,
        chatList,
        msg,
        setmessage,
        sendMessage
    }
    console.log(config);

    return <Route path={path} exact={exact} strict={strict} render={
        (props) => {
            return <Component {...props} {...config} />
        }
    }></Route>

}
export default withRouter(PrivateRoute)