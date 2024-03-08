import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Transactions from './Pages/Transactions/Transactions.jsx'
import Statstics from './Pages/Statstics.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
     <Route path="" element={<App />} />
     <Route path="transactions" element={<Transactions />} />
     <Route path="stats" element={<Statstics />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
