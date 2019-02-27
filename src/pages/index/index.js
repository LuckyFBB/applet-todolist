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
    if (this.state.todos) {
      this.initTodos()
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    this.handleGetStorage()
    if (this.state.todos) {
      this.initTodos()
    }
  }

  componentDidHide() { }

  onPullDownRefresh() {
    console.log('添加页面')
    Taro.navigateTo({
      url: '../add/add'
    })
    Taro.stopPullDownRefresh()
  }

  //获取todo列表
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

  //初始化数据是否展示
  initTodos = () => {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      todos[i].show = false
    }
    this.setState({
      todos
    })
  }

  handleDown = (id) => {
    let todos = this.state.todos
    todos.forEach(item => {
      if (item.id === id) {
        item.show = !item.show
      }
    })
    this.setState({
      todos
    })
  }

  handleDelete = (id, e) => {
    e.stopPropagation()
    let todos = this.state.todos
    todos = todos.filter(item => item.id !== id)
    Taro.setStorage({
      key: 'todos',
      data: todos,
      success() {
        Taro.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 3000
        })
      }
    })
    this.handleGetStorage()
  }

  handleTouch = (id) => {
    console.log(id)
  }

  render() {
    const { todos } = this.state
    return (
      <View className='todo'>
        {
          (todos === null || todos.length === 0) ? (
            <View className='todo__none'>
              <Text>元气满满新的一天！</Text>
              <Text>下拉创建新的待办事吧！</Text>
            </View>
          ) : (
              todos.map((item, index) => {
                return (
                  <View className='todo__item' key={item.id} onTouchMove={this.handleTouch.bind(this, item.id)}>
                    <View className='item__info' onClick={this.handleDown.bind(this, item.id)}>
                      <Text className='info__name'>{`${index + 1}.   ${item.name}`}</Text>
                      <View className='info__img'>
                        <Image src={down} />
                      </View>
                    </View>
                    {
                      item.show ? (
                        <View className='item__action'>
                          <Text className='action--success'>完成</Text>
                          <Text className='action--delete' onClick={this.handleDelete.bind(this, item.id)}>删除</Text>
                        </View>
                      ) : null
                    }
                  </View>
                )
              })
            )
        }
      </View>
    )
  }
}

