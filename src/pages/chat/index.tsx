import { Input, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import Cookies from "js-cookie";
import axios from "axios";
import './style.less'
const { TextArea } = Input;
const boy = require('../../assets/boy.png').default;
const girl = require('../../assets/girl.png').default;
const ChatPC: React.FC = (props: any) => {
    const {
        userList,
        userActive,
        onClickSelectUser,
        userName,
        adminUser,
        chatList,
        msg,
        setmessage,
        sendMessage
    } = props;

    return (
        <section className='chat-window'>
            <section className='chat-pc'>
                <div className='char-content'>
                    <div className='chat-left'>
                        <div className='search'>
                            <input type="text" />
                            <span className='icon'></span>
                        </div>
                        {
                            userList && userList.length && userList.map((item: any) => {
                                return <div
                                    key={item.key}
                                    className={userActive === item.userName ? 'active chat-row' : 'chat-row'}
                                    onClick={() => onClickSelectUser(item)}
                                >
                                    <div >
                                        <img src={boy} alt="" />
                                    </div>
                                    <span>{item.userName}</span>
                                </div>
                            })
                        }
                    </div>
                    <div className='chat-right'>
                        <div className='right-title'>{userName}</div>
                        <div className='right-msg'>
                            {
                                adminUser === 'admin' ? <div className='chat'>
                                    <div className='chat-msg left'>
                                        <span className='girl'></span>
                                        <span>
                                            撒大声地付
                                            多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多
                                            {/* <span className="arrow"></span> */}
                                        </span>
                                    </div>
                                    <div className='chat-msg right'>
                                        <span className='girl'></span>
                                        <span>
                                            撒大声地付
                                            多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多撒大声地付多撒所多
                                            {/* <span className="arrow"></span> */}
                                        </span>
                                    </div>
                                </div> : <div className='chat'>
                                    {chatList && chatList.length && chatList.map((item: { sender: string; message: {} | null | undefined; }, index: React.Key | null | undefined) => {
                                        if (item.sender === 'admin') {
                                            return <div className='chat-msg left' key={index}>
                                                <span className='girl'></span>
                                                <span>{item.message}</span>
                                            </div>
                                        } else {
                                            return <div className='chat-msg right' key={index}>
                                                <span className='girl'></span>
                                                <span>{item.message}</span>
                                            </div>
                                        }
                                    })}


                                </div>
                            }

                        </div>
                        <div className='right-send'>
                            <div className='send-push'>
                                <TextArea
                                    value={msg}
                                    onChange={(e) => setmessage(e.target.value)
                                    }
                                    autoSize={{ minRows: 3, maxRows: 3 }}
                                />
                            </div>
                            <div className='send-btn' onClick={sendMessage}>
                                <button>发送</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ChatPC

function item(item: any, index: any): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined {
    throw new Error('Function not implemented.');
}
function index(item: (item: any, index: any) => string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined, index: any): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined {
    throw new Error('Function not implemented.');
}

