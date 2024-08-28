import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './contexts/authcontext';
import { ProjectProvider } from './contexts/projectcontext';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';



let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ProjectProvider>
           <GoogleOAuthProvider clientId='737809850359-l0dlilcelq8b7updja3dk67bpf27j2lj.apps.googleusercontent.com'>
              <App />
            </GoogleOAuthProvider>
          </ProjectProvider> 
          </AuthProvider>
       </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
