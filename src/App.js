import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Hongkong = lazy(() => import('./pages/Hongkong'));
const Sanghae = lazy(() => import('./pages/Sanghae'));
const Tokyo = lazy(() => import('./pages/Tokyo'));
const Tokyosea = lazy(() => import('./pages/Tokyosea'));
const Osaka = lazy(() => import('./pages/Osaka'));
const Paris = lazy(() => import('./pages/Paris'));
const Beijing = lazy(() => import('./pages/Beijing'));
const Singapore = lazy(() => import('./pages/Singapore'));
const Walt = lazy(() => import('./pages/Walt'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hongkong" element={<Hongkong />} />
          <Route path="/sanghae" element={<Sanghae />} />
          <Route path="/tokyo" element={<Tokyo />} />
          <Route path="/tokyosea" element={<Tokyosea />} />
          <Route path="/osaka" element={<Osaka />} />
          <Route path="/paris" element={<Paris />} />
          <Route path="/beijing" element={<Beijing />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/walt" element={<Walt />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App