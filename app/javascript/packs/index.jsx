import React from 'react';
import ReactDOM from 'react-dom';
import TestBoi from '../components/TestBoi';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TestBoi />,
    document.body.appendChild(document.createElement('div')),
  )
});
