"use strict";

var app = {
  title: 'Visibility Toggle',
  toggle: false,
  details: 'here are some details'
};

var showDetails = function showDetails() {
  app.toggle = !app.toggle;
  render();
};

var render = function render() {
  var jsx = React.createElement("div", null, React.createElement("h1", null, app.title), React.createElement("button", {
    onClick: showDetails
  }, app.toggle ? 'Hide details' : 'Show details'), app.toggle && React.createElement("p", null, app.details));
  ReactDOM.render(jsx, document.getElementById('app'));
};

render(); // teacher solution
// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
// render();
