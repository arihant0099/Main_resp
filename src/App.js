import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {LoginPage} from './routes/Routes';
import {SignupPage} from './routes/Routes';
import {ActivationPage} from './routes/Routes';
import {HomePage} from './routes/Routes';
import { Bounce, ToastContainer,toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './server';

function App() {
  useEffect(()=>{
    axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      toast.error(err.response.data.message);
    })
  },[])
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path="/sign-up" element={<SignupPage />} />
    <Route path="/activation/:activation_token" element={<ActivationPage />} />
  </Routes>
  <ToastContainer
  position='top-center'
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  transition={Bounce}
  theme='light'/>
  </BrowserRouter>
  </>  
) ;
}

export default App;
