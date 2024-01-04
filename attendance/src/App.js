import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/addStudent';



function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/add-student' element={<AddStudent></AddStudent>}></Route>

</Routes>
    </div>
  );
}

export default App;
