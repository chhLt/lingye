import 'antd/dist/antd.less';
import './App.less';
import PrivateRoute from "components/privateRoute";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "pages/login";
import Layout from "pages/layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/layout" component={Layout}></PrivateRoute>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
