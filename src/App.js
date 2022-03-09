import RefComponent from './components/ref/RefComponent'
import State from './components/state/State'
import DangerouslySetInnerHtml from './components/dangerouslySetInnerHtml/DangerouslySetInnerHtml'
import Tab from './components/tab/Tab'
import Bar from './components/props/Nav'

function App() {
  return (
    <div className="App">
      <h1>Hello, react</h1>
      <Bar />
      <RefComponent />
      <State />
      <DangerouslySetInnerHtml />
      <Tab />
    </div>
  )
}

export default App
