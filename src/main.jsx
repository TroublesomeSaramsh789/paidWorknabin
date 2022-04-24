import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserProvider from "./contex/userProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
)
