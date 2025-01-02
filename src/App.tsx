import React from 'react';
import { HeaderComponent } from './components/headerComponent/HeaderComponent.tsx';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { ProductsPage } from './pages/ProductsPage/ProductsPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';
import { UserProfilePage } from './pages/UserProfilePage/UserProfilePage.tsx';

function App() {
  return (
    <div>
      <HeaderComponent/>
      

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='user_profile' element={<UserProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
