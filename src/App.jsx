import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Home from './views/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Redirect from="*" to="/" />
        </Switch>
        <MyFooter />
      </Router>
    );
  }
}

export default App;
