import RefComponent from './components/ref/RefComponent'
import State from './components/state/State'
import DangerouslySetInnerHtml from './components/dangerouslySetInnerHtml/DangerouslySetInnerHtml'
import Tab from './components/tab/Tab'
import Bar from './components/props/Nav'
import ParentChildCommunication from './components/props/ChildToParent'
import ContextComp from './components/props/Context'

function App() {
  return (
    <div className="App">
      <h1>Hello, react</h1>
      <Bar />
      <ParentChildCommunication />
      <ContextComp />
      <RefComponent />
      <State />
      <DangerouslySetInnerHtml />
      <Tab />
    </div>
  )
}

export default App
