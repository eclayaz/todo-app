import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App({ match }) {
  const { path } = match;

  return (
    <div className="App">
      <h1>Hey welcome home!</h1>
      <div className="links">
        <Link to={`${path}`} className="link">
          Profile
        </Link>
        <Link to={`/comments`} className="link">
          Comments
        </Link>
        <Link to={`/contact`} className="link">
          Contact
        </Link>
      </div>
      <div className="tabs">
        <Switch>
          <Route path={`${path}`} exact component={Profile} />
          <Route path={`/comments`} component={Comments} />
          <Route path={`/login`} component={LoginPage} />
          <PrivateRoute path={`/contact`}>
            <Contact />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
