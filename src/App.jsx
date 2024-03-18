
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'


function App() {


  return (
    <>
    <h1 className="text-3xl font-bold underline">This is Redux learning</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
