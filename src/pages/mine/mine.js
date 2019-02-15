import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './mine.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: null
    }
  }

  componentWillMount() {
    let _this = this
    Taro.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        _this.setState({
          userInfo
        })
      }
    })
  }

  render() {
    const { userInfo } = this.state
    return (
      <View className='mine'>
        <View className='mine__info'>
          <Image src={userInfo.avatarUrl} />
          <Text>{userInfo.nickName}</Text>
        </View>
        <View className='mine__intro'>
          <View>你好，欢迎使用小程序版的TodoList待办事项。</View>
          <View>该小程序为个人开发，开发者还在学习和研究小程序技术中，目前的版本暂时没法完全满足各个用户的需求。对于该小程序您有好的建议或者使用中遇到的问题，可以通过邮箱(976060700@qq.com)反馈给我。</View>
          <View>随着学习的深入，我不会断优化该小程序。</View>
          <View>谢谢您的支持。</View>
        </View>
      </View>
    )
  }
}

