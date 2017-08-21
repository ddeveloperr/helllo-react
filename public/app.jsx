var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

let firstName = 'Kemal';
let myMessage = "I'm so happy to learn React.js so fast!";

ReactDOM.render(
             <Greeter name={firstName} message =  {myMessage} />,
             document.getElementById('app')
             );