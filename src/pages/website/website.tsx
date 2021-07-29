import HeadPage from './children/headerpage'
import Header from './component/header'
import Footer from './component/footer'
import Custumer from './component/custumer'
import './style.less'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Website() {

  return (
    <div className='website'>
      <Header />
      <Switch>
        <Route path="/" exact={false} component={HeadPage}></Route>
      </Switch>
      <Footer />
      <Custumer />
    </div>
  )
}

export default Website;