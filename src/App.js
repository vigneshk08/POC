import Routes from './Main';

import { withRouter, BrowserRouter, Redirect, Switch, HashRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
