import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Layout from './components/layout';
import "./styles/globals.scss";
import navLinks from './data/navLinks';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
        {navLinks.map((item) => (
          <Route path={item.link} element={item.element}></Route>
        ))}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
