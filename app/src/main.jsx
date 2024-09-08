import React from 'react'
import ReactDOM from 'react-dom/client' //using client version, not mobile
import App from './App.jsx'
import './index.css'

//a wrapper-component that detects potential React-related in our application. It doesn't render anything visible
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)