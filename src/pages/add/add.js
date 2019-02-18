import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Label, Input, Textarea } from '@tarojs/components'
import './add.less'

export default class Index extends Component {

  config = {
    "navigationBarTitleText": "添加事项",
    "enablePullDownRefresh": false
  }

  handleSubmit = (e) => {
    const todo = e.detail.value
    if (!Taro.getStorageSync('todos')) {   //如果当前没有todos这个key，新建一个key值
      let todos = []
      Object.assign(todo, { id: 0 })   //添加唯一标识
      console.log(todo)
      todos.push(todo)
      Taro.setStorage({
        key: 'todos',
        data: todos,
        success() {
          Taro.showToast({
            title: '添加成功',
            icon: 'success'
          })
          Taro.navigateBack({
            delta: 1
          })
        }
      })
    } else {
      Taro.getStorage({
        key: 'todos',
        success(res) {
          let todos = res.data
          Object.assign(todo, { id: todos.length })   //添加唯一标识
          todos.push(todo)
          Taro.setStorage({
            key: 'todos',
            data: todos,
            success() {
              Taro.showToast({
                title: '添加成功',
                icon: 'success'
              })
              Taro.navigateBack({
                delta: 1
              })
            }
          })
        }
      })
    }
  }

  render() {
    return (
      <View className='add'>
        <View className='add__form'>
          <Form onSubmit={this.handleSubmit}>
            <View className='form__item'>
              <Input className='item__input' placeholder='请输入事件名称' focus={true} name='name' />
            </View>
            <View className='form__item form__item--detail'>
              <Textarea className='item__input' placeholder='事件详细描述' name='detail' />
            </View>
            <Button className='form__button' form-type='submit'>添加事件</Button>
          </Form>
        </View>
      </View>
    )
  }
}

