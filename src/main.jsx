import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/style.css'
import App from './App.jsx'

const app = {
  name: 'Mschedule',
  placeholder: [
    'enter your username'
  ]
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App appinfo={app}/>
  </StrictMode>,
)
