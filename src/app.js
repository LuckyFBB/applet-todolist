import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      "pages/mine/mine",
      "pages/add/add"
    ],
    window: {
      navigationBarBackgroundColor: '#5F9EA0',
      navigationBarTitleText: '待办事项',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index",
          text: "待办",
          iconPath: 'images/todo.png',
          selectedIconPath: 'images/todo-select.png',
        },
        {
          pagePath: "pages/mine/mine",
          text: "关于",
          iconPath: 'images/mine.png',
          selectedIconPath: 'images/mine-select.png',
        }
      ],
      selectedColor: '#5F9EA0'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
