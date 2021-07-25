import { View, Swiper, SwiperItem, Text, Image, Button } from '@tarojs/components'
import NavTop from "components/NavTop"
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import './index.less'
import { useAppSelector, useAppDispatch } from 'components/hooks'
import { setUserstatus } from "store/userSlice"
import request from "server/index"

function Index() {
  const isDoctor = useAppSelector((state) => state.user.isDoctor)
  const dispatch = useAppDispatch()
  console.log("isDoctor", isDoctor);
  useEffect(() => {
    // 模拟请求--------------
    // request("/api/test/profile", {}, "GET").then(res => {
    //   console.log(res, 3)
    // })
    // -----------------------
    setTimeout(() => {
      dispatch(setUserstatus(false))
    }, 3000)
  }, [])
  // const onSkip = () => {
  //   Taro.navigateTo({
  //     url: '/pages/home/index?name=张三&id=1'
  //   })
  // }
  const onGetPhoneNumber = (e) => {
    console.log(e);
    var ivObj = e.detail.iv
    var telObj = e.detail.encryptedData
    var codeObj = "";
    Taro.login({
      success(res) {
        var code = res.code
        Taro.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxe3e313ef9a946be8&secret=7c9c0850d5b391d3e6fb295ca7089cda&js_code=${code}&grant_type=authorization_code&encryptedData=${telObj}&iv=${ivObj}`,
          data: {
            code
          },
          method: "GET",
          success: function (res) {
            console.log(res.data.openid);
          }
        })
      }
    })
    console.log(telObj, ivObj);
  }
  const [btnList] = useState()
  return (
    <View className='head_page'>
      <NavTop title='首页' icon='close' />
      {/* <Button type="primary" onClick={() => dispatch(increment())}>+</Button>
      <Text>值：{count.value}</Text>
      <Button type="primary" onClick={() => dispatch(decrement())}>-</Button> */}
      <View className="head_page_content">
        {/* 轮播 */}
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className="head_page_banner red">
            <View ></View>
          </SwiperItem>
          <SwiperItem className="head_page_banner blue">
            <View ></View>
          </SwiperItem>
          <SwiperItem className="head_page_banner yellow">
            <View ></View>
          </SwiperItem>
        </Swiper>
        {/* <button open-type='getPhoneNumber' bindgetphonenumber="getPhoneNumber">获取授权</button> */}
        <Button open-type='getPhoneNumber' onGetPhoneNumber={onGetPhoneNumber} type='primary'
        // onClick={(e) => {
        //   // Taro.getUserProfile({
        //   //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        //   //   success: (res) => {
        //   //     console.log(res);

        //   //   }
        //   // })
        //   console.log(e);
        //   var ivObj = e.detail.iv
        //   var telObj = e.detail.encryptedData
        //   var codeObj = "";
        //   console.log(telObj);


        //   // Taro.getUserInfo({
        //   //   success: function (res) {
        //   //     console.log(res);
        //   //     var userInfo = res.userInfo
        //   //     var nickName = userInfo.nickName
        //   //     var avatarUrl = userInfo.avatarUrl
        //   //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
        //   //     var province = userInfo.province
        //   //     var city = userInfo.city
        //   //     var country = userInfo.country
        //   //   }
        //   // })
        // }}
        >按钮</Button>
      </View>
    </View>
  )
}

export default Index


