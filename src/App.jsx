import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './Pages/About/About'
import Academics from './Pages/Academics/Academics'
import {navBarData} from '../src/data/navBarData';
import Admissions from './Pages/Admissions/Admissions'
import StudentL from './Pages/StudentL/StudentL'
import Contact from './Pages/Contact/Contact'
import Fooetr from './components/Fooetr/Fooetr'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import HandleLoadingComponent from './components/HandleLoadingComponent'

function App() {
  return (
    <>
    <Navbar data={navBarData} companyName='Little Learners'/>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<HandleLoadingComponent />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='academics' element={<Academics />} />
        <Route path='admissions' element={<Admissions />} />
        <Route path='studendLife' element={<StudentL />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    <Fooetr />
    </>
  )
}

export default App
