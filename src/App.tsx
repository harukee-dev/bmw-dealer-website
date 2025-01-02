import React from 'react';
import { HeaderComponent } from './components/headerComponent/HeaderComponent.tsx';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { DesignPage } from './pages/ProductsPage/DesignPage.tsx';
import { FeaturesPage } from './pages/CartPage/FeaturesPage.tsx';
import { ReviewsPage } from './pages/UserProfilePage/ReviewsPage.tsx';
import { OrderPage } from './pages/OrderPage/OrderPage.tsx';

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
