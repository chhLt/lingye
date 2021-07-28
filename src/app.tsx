import 'antd/dist/antd.less';
import './App.less';
// import PrivateRoute from "components/privateRoute";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "pages/login";
import Chat from "pages/chat";
import Layout from "pages/layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/" component={Chat}></Route>
          {/* <PrivateRoute path="/layout" component={Layout}></PrivateRoute> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
