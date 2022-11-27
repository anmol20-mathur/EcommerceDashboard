import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/addProducts' element={<h1>Product Lists</h1>}/>
        <Route path='/update' element={<h1>Updated Product Lists</h1>}/>
        <Route path='/profileView' element={<h1>Profile View</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
