

function Footer() {

  return (
    <div id='footer'>
      <div className='left'>
        <div className='left_row'>
          电话：
        </div>
        <div className='left_row'>
          邮箱：
        </div>
        <div className='left_row'>
          地址：湖南省长沙市天心区芙蓉中路三段558号建鸿达大厦2003号
        </div>
        <div className='left_row'>
          <a href="http://www.lingyezs.com/">网站首页</a>
          <span> |</span>
          <a href="#head_content"> 案例展示</a>
          <span> |</span>
          <a href="#about_us"> 关于我们</a>
          <span> |</span>
          <a href="#footer"> 联系我们</a>
        </div>
      </div>
      <div className='right_row'>
        <div className='cqrcode'>
          <img src={require('../assets/wxcode.jpg').default} alt="" />
        </div>
        <span>扫码添加客服</span>
      </div>
      <div className='keep_on_record' >
        <span>版权所有@2021</span>
        <a href="http://www.lingyezs.com/"> 湖南领业建筑装饰工程有限公司</a>
        <a href="https://beian.miit.gov.cn/"> 湘ICP备2021011563号-1</a>
      </div>
    </div>
  )
}
export default Footer;