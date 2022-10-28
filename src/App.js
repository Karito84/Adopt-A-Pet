import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navigation />  
    <Routes>
    <Route path="/">
      <Route index element={<HomePage/>} />
      <Route path=":type" element={<HomePage />} />  {/* This is the same as the below code, just prettier */}
       {/* <Route path="/" element={<HomePage />} />
      <Route path="/:type" element={<HomePage />} /> */}
    </Route>
    <Route path=":type/:id" element={<PetDetailsPage />}/>
    <Route path="/search" element={<SearchPage />}></Route>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
