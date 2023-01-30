import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Todos from './components/Todos/Todos.js';
import { useUser } from './context/AuthContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/auth/todos" component={Todos} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-up" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
