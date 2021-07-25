import { View, Text, Image } from '@tarojs/components'
import "./index.less"
import { useState, useEffect } from 'react'

// eslint-disable-next-line import/first
import Taro from '@tarojs/taro'


function NavTop(props) {
    // Taro.getStorageSync("statusBarHeight")
    const {
        title = '',
        icon = ""
    } = props;
    // require("../../assets/back.png")
    const [iconUrl, setIconUrl] = useState("")
    const [statusBarHeight] = useState(Taro.getStorageSync("statusBarHeight") | 0)

    useEffect(() => {
        if (icon === "close") {
            setIconUrl(require("../../assets/close.png"))
        }
        if (icon === "back") {
            setIconUrl(require("../../assets/back.png"))
        }
    }, [icon])

    const iconClick = () => {

    }

    return (
        <View className='nav_top'>
            <View className='status' style={{ height: statusBarHeight }}></View>
            <View className='nav_content'>
                <Image src={iconUrl} onClick={iconClick}></Image>
                <Text>{title}</Text>
            </View>
        </View>
    )

}
export default NavTop