import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleHabit from './components/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

// 컴포넌트를 html과 연결해주는 작업 ReactDOM
ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit/>
  </React.StrictMode>,
  document.getElementById('root')
);

