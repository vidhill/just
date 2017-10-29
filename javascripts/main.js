import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import leftPad from 'just-left-pad';

ReactDOM.render(
  <App x={leftPad('angus', 10, '*')} />,
  document.querySelector('#react-root')
);
