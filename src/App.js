import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LiveStream from './pages/LiveStream/LiveStream';
import PostQuestion from './pages/PostQueston/PostQuestion';
import Questions from './pages/Questions/Questions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/postQuestion' element={<PostQuestion/>}></Route>
          <Route path='/questions' element={<Questions/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
