import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Locations from './pages/locations/Locations';
import Guidlines from './pages/guidlines/Guidlines';
import Planner from './pages/planner/Planner';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/planner' element={<Planner/>}/>
          <Route path='/guidelines' element={<Guidlines/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
