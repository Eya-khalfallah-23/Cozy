import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const BlogsPage = lazy(() => import('../pages/BlogsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ListRoutes = () => {
    return (
        <Router>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route
                path="/login"
                element={<LoginPage /> }
              />
              <Route
                path="/signup"
                element={ <SignupPage />}
              />
              <Route
                path="/profile"
                element={
                  
                    <ProfilePage />
               
                }
              />
              {/*<Route path="*" element={<NotFoundPage />} />*/}
            </Routes>
          </Suspense>
        </main>
        {/* <Footer /> */}
      </Router>
    );
};

export default ListRoutes;