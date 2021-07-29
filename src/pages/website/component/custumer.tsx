import { useState } from "react";


function Custumer() {
  const [show, setShow] = useState(false)
  return (
    <div id='custumer'>
      <div className='content'>
        {show ? <div className='modal'>
          <img src={require('../assets/wxcode.jpg').default} alt="" />
        </div> : ''}

        <div className="row">
          <img src={require('../assets/customer.png').default} alt="" />
          <span>在线客服</span>
        </div>
        <div className="row">
          <img
            src={require('../assets/qrcode.png').default}
            alt=""
            onMouseEnter={() => setShow(!show)}
            onMouseLeave={() => setShow(!show)}
          />
          <span>客服微信</span>
        </div>
        <div className='row'>
          <img src={require('../assets/upper.png').default} alt="" />
        </div>

      </div>
    </div>
  )
}
export default Custumer;