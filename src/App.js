import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Regestration from './component/regestration';

function App() {
  return (
    <BrowserRouter>
                <Routes>
<Route path='/' element={<Regestration/>}>

</Route>


                  </Routes>
                  </BrowserRouter>
  );
}

export default App;
