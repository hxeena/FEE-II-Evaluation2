import { createBrowserRouter,Form,RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';
import AppointmentForm from './Components/AppointmentForm';
import About from './Components/About';
import Login from './Components/Login';
const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <>
      <MainPage/>
      </>
    ),
  },
  {
    path:"/Home",
    element:(
      <>
      <Navbar/>
      <Home/>
      </>
    ),
  },
  {
    path:"/Form",
    element:(
      <>
      <Navbar/>
      <AppointmentForm/>
      </>
    ),
  },
  {
    path:"/Aboutpage",
    element:(
      <>
      <Navbar/>
      <About/>
      </>
    ),
  },
  {
    path:"/Loginpage",
    element:(
      <>
      <Navbar/>
      <Login/>
      </>
    ),
  },
]);

function App(){
  return(
     <>
     {/* <MainPage/> */}
    <RouterProvider router={router}/>
    </>
  );
}
export default App;
