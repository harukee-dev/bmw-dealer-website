import React from 'react';
import { HeaderComponent } from './components/headerComponent/HeaderComponent';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DesignPage } from './pages/DesignPage/DesignPage';
import { FeaturesPage } from './pages/FeaturesPage/FeaturesPage';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';
import { OrderPage } from './pages/OrderPage/OrderPage';

function App() {
  return (
    <div>
      <HeaderComponent/>
      

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/design' element={<DesignPage/>}/>
        <Route path='/features' element={<FeaturesPage/>}/>
        <Route path='/reviews' element={<ReviewsPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
