import React from 'react'

import HeadPage from './children/headerpage'
import Header from './component/header'
import Footer from './component/footer'
import Chat from './children/chat'

import Custumer from './component/custumer'
import './style.less'
import { Route, Switch } from 'react-router-dom'

const Website: React.FC = () => {

  return (
    <div className='website'>
      <Header />
      <Switch>
        <Route path="/" exact={false} component={HeadPage}></Route>
      </Switch>
      <Footer />
      <Custumer />
      <Chat />
    </div>
  )
}

export default Website;