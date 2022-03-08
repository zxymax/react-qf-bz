import RefComponent from './components/ref/RefComponent'
import State from './components/state/State'
import DangerouslySetInnerHtml from './components/dangerouslySetInnerHtml/DangerouslySetInnerHtml'
import Tab from './components/tab/Tab'

function App() {
  return (
    <div className="App">
      <h1>Hello, react</h1>
      <RefComponent />
      <State />
      <DangerouslySetInnerHtml />
      <Tab />
    </div>
  )
}

export default App
