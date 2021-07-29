
import { useState } from 'react';
import '../style.less'
function Header() {
  const [current, setcurrent] = useState(1)
  const [navList] = useState<Array<any>>([
    { code: 1, name: '官网首页', id: 'http://www.lingyezs.com/' },
    { code: 2, name: '案例展示', id: '#head_content' },
    { code: 3, name: '关于我们', id: '#about_us' },
    { code: 4, name: '联系我们', id: '#footer' },
  ])
  return (
    <div id='header'>
      <div className='title'>
        <div>
          <img src={require('../assets/logo.png').default} alt="" />
        </div>
        <div>
          <span>领业装饰</span>
          <span>LING YE DECORA TION</span>
        </div>
      </div>
      <div className='nav'>
        {
          navList && navList.map((item: any) => {
            return <a
              key={item.code}
              href={item.id}
              className={current === item.code ? 'active' : ''}
              onClick={() => setcurrent(item.code)}
            >{item.name}</a>
          })
        }
      </div>
    </div>
  )
}
export default Header;