### 为什么要学习 React

- 声明式设计

- 高效灵活

- 组件化

- 单向数据流

- 虚拟 DOM

> React 的特性

- 声明式设计 React 采用声明范式 可以轻松描述应用

- 高效 React 通过对虚拟 DOM 最大限度的减少与 DOM 的交互

- 灵活 React 可以与已知的库或框架更好的结合

- JSX JSX 是 Javascript 的语法扩展

- 组件 通过 React 构建组件 使得代码更加容易得到复用 能够很好的应用在大项目的开发

- 单向响应的数据流 React 实现了单向响应的数据流 从而减少了重复代码 这也是它为什么比传统数据绑定更简单

#### create-react-app 脚手架

> 全局安装 create-react-app

- npm install create-react-app -g

> 不使用全局安装项目 使用 npx

- npx create-react-app app-name

##### Rect 不会绑定事件到元素身上 而是采用事件代理的模式

[Ref README](./src/components/ref/RefComponent.jsx)

> Ref 的应用

> > 给标签设置 ref="username"

- 通过获取 this.refs.name，ref 可以获取到应用的真实 DOM

> > 新的写法

```jsx
myRef = React.createRef()
<div ref={this.myRef}>hello</div>
// 通过 this.myRef.current 访问
```

#### 状态 state

[State README](./src/components/state/State.jsx)

> 状态就是组件描述某种显示情况的数据，由组件自己设置和更改

- 不能直接修改 state 值 需要使用 setState 来修改 state

> setState 同步 异步

> > setState 处在同步的逻辑中 异步更新状态 更新真实 DOM

> > setState 处在异步的逻辑中 同步更新状态 同步更新真实 DOM

#### dangerouslySetInnerHtml

[dangerouslySetInnerHtml README](./src/components/dangerouslySetInnerHtml/DangerouslySetInnerHtml.jsx)

#### tab 组件 DEMO

[tab 组件 demo](./src/components/tab/Tab.jsx)

> 数据请求

- npm install axios

```jsx
// Cinema.jsx
// 此接口需要请求头才能请求成功

  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7902139',
      method: 'GET',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list',
      }
    }).then(res => {
      console.log(res.data.data)
      this.setState((preState) =>({
        cinemaList: [...preState.cinemaList, ...res.data.data.cinemas]
      }))
    })
  }


```

#### props 组件通信传值用法及验证

- npm install prop-types

[prpp-types 用法](./src/components/props/Nav.jsx)

#### 父子通信

[父子组件通信](./src/components/props/ChildToParent.jsx)

> 使用 Context 可以跨越组件进行数据传递

> > [视频例子出处 27React 的 Context 上下文详解](https://www.bilibili.com/video/BV19v411z7mC)

- React.createContext() 创建一个上下文 里面包含 Provider(提供数据) Consumer(消费数据)

[父子组件通信 Context 使用方式](./src/components/props/Context.jsx)
