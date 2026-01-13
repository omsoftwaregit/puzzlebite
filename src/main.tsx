// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import App from './App.tsx';
// // import './index.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'; 


// // ReactDOM.createRoot(document.getElementById('root')!).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// const rootElement = document.getElementById('root');

// if (!rootElement) {
//   throw new Error('Root element not found');
// }

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
