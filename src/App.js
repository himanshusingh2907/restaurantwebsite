
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'




function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
     
      <Route path="/Contact" element={<Contact/>}></Route>
     
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/*" element={<Pagenotfound/>}></Route>  
    </Routes>
    
    </BrowserRouter> 
  
    </div>
  );
}

export default App;
