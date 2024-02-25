import Card from './components/Card'
import './App.css'

function App() {
  let myObj = {
    username:"user1",
    age:10,
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-lg mb-4'>Tailwind test</h1>
     <Card userName = 'New user1' obj = {myObj}/>
     <Card userName = 'New user2' arr = {newArr}/>
    </>
  )
}

export default App
