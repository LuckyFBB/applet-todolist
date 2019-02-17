import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    enablePullDownRefresh: true
  }

  constructor(props) {
    super(props)
    this.state = {
      todos: null
    }
  }

  componentWillMount() {
    this.handleGetStorage()
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    this.handleGetStorage()
  }

  componentDidHide() { }

  onPullDownRefresh() {
    console.log('添加页面')
    Taro.navigateTo({
      url: '../add/add'
    })
    Taro.stopPullDownRefresh()
  }

  handleGetStorage = () => {
    const _this = this
    if (Taro.getStorageSync('todos')) {
      Taro.getStorage({
        key: 'todos',
        success(res) {
          const todos = res.data
          _this.setState({
            todos
          })
        }
      })
    }
  }

  render() {
    const { todos } = this.state
    return (
      <View className='todo'>
        {
          todos === null ? (
            <View className='todo__none'>
              <Text>元气满满新的一天！</Text>
              <Text>下拉创建新的待办事吧！</Text>
            </View>
          ) : (
              todos.map(item => {
                return (
                  <View className='todo__item' key={item.id}>
                    <Text className='item__name'>{item.name}</Text>
                    <Text className='item__detail'>{item.detail}</Text>
                  </View>
                )
              })
            )
        }
      </View>
    )
  }
}

