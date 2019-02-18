import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import down from '../../images/down.png'
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
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
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
    Taro.hideLoading()
  }

  handleDown = (id) => {
    console.log(id)
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
              todos.map((item, index) => {
                return (
                  <View className='todo__item'  key={item.id} onClick={this.handleDown.bind(this, item.id)}>
                    <View className='item__info'>
                      <Text className='info__name'>{`${index + 1}.   ${item.name}`}</Text>
                      <View className='info__img'>
                        <Image src={down} />
                      </View>
                    </View>
                    <View className='item__action'>
                      <Text className='action--success'>完成</Text>
                      <Text className='action--delete'>删除</Text>
                    </View>
                  </View>
                )
              })
            )
        }
      </View>
    )
  }
}

