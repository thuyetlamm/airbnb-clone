import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import HostPage from './pages/HostPage/HostPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/home/host">
          <HostPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
