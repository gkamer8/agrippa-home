import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="*" element = {
            <div>NOT FOUND</div>
          } />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
