import './firebase.js' // importing for initialization
import { createRoot } from 'react-dom/client';
import App from './containers/App'


createRoot(document.getElementById('main'))
   .render(<App />)