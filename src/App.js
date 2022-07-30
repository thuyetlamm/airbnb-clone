import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
