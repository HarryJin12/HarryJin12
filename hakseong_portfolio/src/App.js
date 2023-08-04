import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Main from './components/Main';


function App() {
  return (
   <div>
  
    <Routes>
    <Main></Main>
    </Routes>

   </div>

   
  );
}

export default App;
