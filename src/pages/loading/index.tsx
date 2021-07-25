import { useAppDispatch } from 'components/hooks'
import { setUserstatus } from "store/userSlice"
import { View, Text } from '@tarojs/components'
import NavTop from "../../components/NavTop"
import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.less'
function Loading() {
  const dispatch = useAppDispatch();
  Taro.showLoading({
    title: '加载中',
  })
  useEffect(() => {
    Taro.setStorageSync("token", 12345)
    let timer = setTimeout(() => {
      Taro.hideLoading()
      Taro.navigateTo({
        url: '/pages/index/index?name=张三&id=1'
      })
      dispatch(setUserstatus(false))
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <View className='loading'>
      <NavTop />
      <View className='loading_content'>
        <Text>小程序加载页</Text>
        {/* <Image src={require("../../assets/loading.png")} className='loading-icon'></Image> */}
      </View>
    </View>
  )
}

export default Loading

