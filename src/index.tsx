import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './component/app';
import './index.css';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
