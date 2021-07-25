import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import './index.less'

export default class Home extends Component {

  componentWillMount() { }

  componentDidMount() {
    // 获取参数
    console.log(getCurrentInstance().router?.params)
  }
  componentWillUnmount() { }

  componentDidShow() {

  }

  componentDidHide() { }

  render() {
    return (
      <View className='home'>
        <Text>Hello home!</Text>
      </View>
    )
  }
}
