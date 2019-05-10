"use strict";

console.log('App.js is running!');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two'] // JSX - JavaScript XML

};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? "Here are your options" : "No options"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var user = {
  name: 'Maria',
  age: 29,
  location: 'Salamanca'
};

function getLocation(location) {
  if (location) {
    return React.createElement("p", null, "Location: ", location);
  }
} // logical && operator: if first condition is true second part of the expression evaluates 
// ternary operator good for doing one of two things, && expression good for doing one thing or nothing


var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
