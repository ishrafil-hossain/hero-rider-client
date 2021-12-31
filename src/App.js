import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Form from './Pages/Signup/Form';
import SignInForm from './Pages/SignIn/SignInForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <SignInForm />
          </Route>

          <Route path="/signin">
            <SignInForm />
          </Route>

          <Route path="/signup">
            <Form />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
