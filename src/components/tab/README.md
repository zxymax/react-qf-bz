#### Tab 选项卡实例

> 不使用 css 文件方式写样式 以组件方式写样式 需要安装一下两个包

- 安装 @emotion/styled @emotion/react

```jsx
const TabBox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
`
const UlList = styled.ul`
  list-style: none;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
`
const Ulli = styled.li`
  flex: 1;
  cursor: pointer;
  text-align: center;

  &.active {
    color: red;
  }
`

class Tab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      list: [
        { id: 0, text: '电影' },
        { id: 1, text: '影院' },
        { id: 2, text: '我的' }
      ]
    }
  }

  handleClick = index => {
    this.setState(() => ({ current: index }))
  }

  switchPanel = () => {
    switch (this.state.current) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <Center />
      default:
        return null
    }
  }

  render() {
    const { list, current } = this.state
    return (
      <TabBox>
        {this.switchPanel()}
        <UlList>
          {list &&
            list.map((item, index) => (
              <Ulli
                key={item.id}
                onClick={() => this.handleClick(index)}
                className={current === index ? 'active' : ''}
              >
                {item.text}
              </Ulli>
            ))}
        </UlList>
      </TabBox>
    )
  }
}
```
