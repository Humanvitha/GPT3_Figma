import React from 'react';
import ReactDOM from 'react-dom'; // to hook our react application to index.html
import App from './App';
import './index.css';
ReactDOM.render(<App />, document.getElementById('root')); //App component renders within the index.html with the element having id='root'
