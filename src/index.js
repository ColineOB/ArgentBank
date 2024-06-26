import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/connexion/signIn';
import User from './pages/user/user';
import store from './Redux/store';
import NotFound from './pages/error/notFound';
import Transations from './pages/transactions/transactions';
import TokenChecker from './utils/TokenChecker';

//redux
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <TokenChecker />
        <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/user' element={<User />} />
            <Route path='/transactions' element={<Transations />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
