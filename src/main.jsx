import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
