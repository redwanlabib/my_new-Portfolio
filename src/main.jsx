import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './Components/About/About.jsx';
import MySkills from './Components/MySkills/MySkills.jsx';
import MyProjects from './Pages/MyProjects/MyProjects.jsx';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import AutoLayout from './Components/AutoLayout/AutoLayout.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Services from './Components/Services/Services.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AutoLayout />}
     
    >
        <Route index element={<Home />} />  
        <Route path='/Services' element={<Services/>} />
        <Route path='/About' element={<About></About>} />
        <Route path='/projects' element={<MyProjects></MyProjects>} />
        <Route path='/MySkills' element={<MySkills></MySkills>} />
        <Route path='/Contact' element={<Contact></Contact>} />
  
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
