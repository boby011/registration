import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Form } from './Form';
import { Navigation } from './Navigation';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import Admin from './Admin';
import Teacher from './Teacher';
import Student from './Student';
import { View } from './View';
import { Update } from './Update';
import { Login } from './Login';
import { Profile } from './Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route path='/form' element={<Form/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
