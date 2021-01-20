// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import AddTransactions from "./components/addTransaction";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
console.log('Trello powerup devleopment started')
window.TrelloPowerUp.initialize({
    'card-badges':function(t,opts){
       return [];
    },
    'card-back-section': function (t, options){
      return {
        title: '🤑 My Expense Tracker 🤑',
        // icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
        content: {
          type: 'iframe',
          url: t.signUrl(AddTransactions),
          // height: 'auto' // Max height is 500
        }
      };
    },
})