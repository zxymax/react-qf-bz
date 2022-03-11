#### React 生命周期

> 初始化阶段

- componentWillMount: render之前最后一次修改状态的机会
- render: 只能访问this.props和this.state，不允许修改状态和DOM输出
- componentDidMount: 成功render并渲染完成真实DOM之后触发，可以修改DOM

> 运行中阶段

- componentWillReceiveProps: 当父组件修改当前组件属性时触发
- shouldComponentUpdate: 返回false会阻止render调用
- componentWillUpdate: 不能修改属性和状态
- render: 只能访问this.props和this.state，不允许修改状态和DOM输出
- componentDidUpdate: 可以修改DOM

> 销毁阶段

- componentWillUnmount: 在删除组件之前清理操作，比如计时器和事件监听
