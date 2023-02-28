
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import NavbarExample from './layouts/NavbarExample';
// import ThemeProvider from 'react-theme-provider';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Action from './Components/Action';
import ApiCall from './Components/ApiCall';
import Pagination from './Components/Pagination';
import ApiCall2 from './Components/ApiCall2';
import FormPage from './Components/FormPage';
import Parent from './Components/Parent';
import {useSelector} from 'react-redux'
import Redux from './Components/Redux';




function App() {

  const users = useSelector(state => state.users)
 
return (
    <div className="App">
   
 <BrowserRouter>
 {/* <ThemeProvider> */}
<Routes>

  <Route exact path='/' element={ <NavbarExample/>}>
  <Route index element={ <Home/> }/>
  <Route path='about' element={ <About/> }/>
  <Route path='contact' element={ <Contact/> }/>
  <Route path='apicall' element={ <ApiCall/> }   />
  <Route path='pagination' element={ <Pagination/> }   />
  <Route path='apicall-2' element={ <ApiCall2/> }   />
  <Route path='dropdown/action' element={ <Action/> }/>
  <Route exact path='/editprofile' element={ <Parent/> }/>
  <Route exact path='redux' element={ <Redux/> }/>
  <Route exact path='formpage' element={ <FormPage/> }/>

  <Route path='*' element={ <Navigate replace to="/"/>}/>

  </Route>
  </Routes>

{/* // </ThemeProvider> */}
 </BrowserRouter>
    </div>
  );
}

export default App;
