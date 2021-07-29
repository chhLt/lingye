import 'antd/dist/antd.less';
import './app.less';
// import PrivateRoute from "components/privateRoute";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "pages/login";
import Chat from "pages/chat";
import Website from "pages/website/website";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/" component={Website}></Route>
          <Route exact path="/Chat" component={Chat}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
