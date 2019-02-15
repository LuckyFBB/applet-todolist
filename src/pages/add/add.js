import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Label, Input, Textarea } from '@tarojs/components'
import './add.less'

export default class Index extends Component {

  config = {
    "navigationBarTitleText": "添加事项",
    "enablePullDownRefresh": false
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='add'>
        <View className='add__form'>
          <Form>
            <View className='form__item'>
              <Input className='item__input' placeholder='请输入事件名称' focus={true} />
            </View>
            <View className='form__item form__item--detail'>
              <Textarea className='item__input' placeholder='事件详细描述'/>
            </View>
            <Button className='form__button'>添加事件</Button>
          </Form>
        </View>
      </View>
    )
  }
}

