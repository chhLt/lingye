import React from 'react'
import '../style.less'
const Chat: React.FC = (props: any) => {
  return (
    <div>
      <div id='chat'>
        <div className='title'>
          <div>
            <img src={require('../assets/logo01.png').default} alt="" />
            <span>【领业装饰】官网客服</span>
          </div>
          <img src={require('../assets/close.png').default} alt="" />
        </div>
        <div className='content'>
          <div className='welcome'>
            <span>欢迎您的咨询，期待为您服务!</span>
          </div>
          <div className='dialogue_content'>
            <div className='dialogue'>
              <div className='icon'>
                <img src={require('../assets/logo01.png').default} alt="" />
              </div>
              <div className='msg'>
                <span>领业装饰-小星星</span>
                <span>欢迎您的咨询，期待为您服务!欢迎您的咨询，期待为您服务欢迎您的咨询，期待为您服务</span>
              </div>
            </div>
            <div className='dialogue right'>
              <div className='icon'>
                <img src={require('../assets/logo01.png').default} alt="" />
              </div>
              <div className='msg'>
                <span>领业装饰-小星星</span>
                <span>欢迎您的咨询，期待为您服务!欢迎您的咨询，期待为您服务欢迎您的咨询，期待为您服务</span>
              </div>
            </div>
          </div>
        </div>
        <div className='send_msg'>
          <div>
            <textarea></textarea>
          </div>
          <div className='send_btn'>
            <span>发送</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Chat;