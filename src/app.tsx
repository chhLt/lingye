import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from "components/privateRoute";
import { lazy, Suspense } from 'react'
import 'antd/dist/antd.less';
import './app.less';

const Website = lazy(() => import('pages/website/website'))
const Login = lazy(() => import('pages/login'))
const Chat = lazy(() => import('pages/chat'))

function App() {
  return (
    <Suspense fallback={<span>加载中。。。</span>}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/Login" component={Login}></Route>
            <PrivateRoute exact path="/" component={Website} ></PrivateRoute>
            <PrivateRoute exact path="/layout/chat" component={Chat}></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
