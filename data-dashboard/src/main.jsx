import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DetailedView from './components/DetailedView.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App/>} />
        <Route index={false} path="/:name" element={<DetailedView/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
