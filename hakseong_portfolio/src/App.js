import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Main from './components/Main';


function App() {
  return (
   <div>
  
    <Routes>
    <Route path='/' element={Main}></Route>
    </Routes>
{/* <h1>test App</h1> */}

   </div>

   
  );
}

export default App;
