import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.less'
import { store } from "./store"
import { Provider } from 'react-redux'


class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }
  // options
  onLaunch() {
    Taro.getSystemInfo({})
      .then(res => {
        Taro.setStorageSync("statusBarHeight", res.statusBarHeight || 0)
        // Taro.$navBarMarginTop = res.statusBarHeight || 0
      })

  }
  // 页面不存在时触发
  onPageNotFound() {

  }
  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
