import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const PizzaDetails = React.lazy(() => import('./components/PizzaDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/cart'
              element={
                <Suspense fallback={<div>Загрузка корзины...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path='/details:id'
              element={
                <Suspense fallback={<div>Загрузка товара...</div>}>
                  <PizzaDetails />
                </Suspense>
              }
            />
            <Route
              path='*'
              element={
                <Suspense fallback={<div>Загрузка товара...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
