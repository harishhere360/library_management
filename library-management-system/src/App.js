import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import BookList from './components/BookList';
import UserDashboard from './components/UserDashboard';
import{ BrowserRouter as Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route exact path="/dashboard" component={UserDashboard} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
