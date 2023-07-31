import React from 'react'

import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import FAQsPage from './pages/FAQsPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/faqs' element={<FAQsPage/>}/>
      </Routes>
      </div>
  )
}

export default App
