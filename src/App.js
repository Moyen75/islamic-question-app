import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LiveStream from './pages/LiveStream/LiveStream';
import PostQuestion from './pages/PostQueston/PostQuestion';
import Questions from './pages/Questions/Questions';
import Dashboard from './pages/Dashboard/Dashboard';
import Holiness from './pages/Holiness/Holiness';
import Sin from './pages/Sin/Sin';
import Akidah from './pages/Akidah/Akidah';
import Akhirat from './pages/Akhirat/Akhirat';
import AskQuestion from './pages/AskQuestion/AskQuestion';
import AskedQuestions from './pages/AskedQuestions/AskedQuestions';
import Adhunik from './pages/Adhunik/Adhunik'
import Ajan from './pages/Ajan/Ajan';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Adob from './pages/Adob/Adob';
import Anondo from './pages/Anondo/Anondo';
import AhleHadith from './pages/AhleHadith/AhleHadith';
import History from './pages/History/History';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path='/ask' element={<PrivateRoute><AskQuestion /></PrivateRoute>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/postQuestion' element={<PostQuestion />}></Route>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='' element={<Questions />}></Route>
              <Route path='questions' element={<Questions />}></Route>
              <Route path='asked' element={<AskedQuestions />}></Route>
              <Route path='holiness' element={<Holiness />}></Route>
              <Route path='sin' element={<Sin />}></Route>
              <Route path='akhirat' element={<Akhirat />}></Route>
              <Route path='akidah' element={<Akidah />}></Route>
              <Route path='ajan' element={<Ajan />}></Route>
              <Route path='adhunik' element={<Adhunik />}></Route>
              <Route path='adob' element={<Adob />}></Route>
              <Route path='anondo' element={<Anondo />}></Route>
              <Route path='ahlehadith' element={<AhleHadith />}></Route>
              <Route path='history' element={<History />}></Route>
            <Route path='ask' element={<PrivateRoute><AskQuestion /></PrivateRoute>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
