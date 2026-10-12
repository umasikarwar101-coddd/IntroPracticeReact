import Usercard from "./components/Usercard.jsx"
import "./App.css"
function App() {
  return (
    <div className="container">
    <Usercard name ="sikha" desc="desc1" im="https://images.unsplash.com/photo-1787612498788-69a4559a1437?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" style={{"border-radius":"10px"}} />
    <Usercard name="arjun" desc="desc2" im="https://images.unsplash.com/photo-1791114744210-c80cd012698f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
    <Usercard name="ram" desc="desc3" im="https://images.unsplash.com/photo-1791498876259-691a5c377ef1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
    </div>
     )
     }

     export default App