// 'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

var App = React.createClass({
  displayName: 'App',
  render: function() {
    // The second parameter is an object of attributes for the element (if any)
    return React.createElement('div', { }, 'Something something Dark Side');
  }
});
 
ReactDOM.render(
  React.createElement(App),
  document.getElementById("page-build")
);