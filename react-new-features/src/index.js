import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp.js'

ReactDOM.render(<NoteApp />, document.getElementById('root'));

serviceWorker.unregister();