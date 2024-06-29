import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Locations from './pages/Locations';
import Guidlines from './pages/guidlines/Guidlines';
import Planner from './pages/Planner';
import { store } from './store';
import { Provider } from 'react-redux';
import LocationForm from './pages/FormPage';
import { useEffect } from 'react';
import { useAttractions } from './features/attractions';
import { getLocations } from './lib/getAttractions';

function App() {
  const { setAttractions, setIsLoaded } = useAttractions()


  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/locations' element={<Locations/>}/>
            <Route path='/planner' element={<Planner/>}/>
            <Route path='/guidelines' element={<Guidlines/>}/>
            <Route path='/add' element={<LocationForm/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
