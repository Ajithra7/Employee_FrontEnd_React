import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpDataBank from './Components/EmpDataBank';
import AddData from './Components/AddData';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<EmpDataBank/> }/>
      <Route path='/insertdata' exact element = {<AddData/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
