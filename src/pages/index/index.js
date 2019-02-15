import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    enablePullDownRefresh: true
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  onPullDownRefresh(){
      console.log('添加页面')
      Taro.navigateTo({
        url: '../add/add'
      })
      Taro.stopPullDownRefresh()
  }

  render() {
    return (
      <View className='index'>
        <View className='item__none'>
          <Text>元气满满新的一天！</Text>
          <Text>写下新的待办事吧 ！</Text>
        </View>
      </View>
    )
  }
}

