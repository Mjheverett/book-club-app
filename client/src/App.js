import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';

import MaterialNavbar from './components/Navbar/MaterialNavbar';
import AuthenticatedHome from './components/Auth0/AuthenticatedHome';
import Dashboard from './components/Dashboard/Dashboard';
import Library from './components/Library/Library';
import Groups from './components/Groups/Groups';
import Footer from './components/Footer/Footer';
import Results from './components/Results/Results';
import Profile from './components/Profile/Profile';
import Sharing from './components/Sharing/Sharing';
import Notifications from './components/Notifications/Notifications';
import './App.css'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002B36',
      contrastText: '#93A1A1',
    },
  },
  shadows: ["none"]
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>  
        <MaterialNavbar />
        <div className="app-container">
          <Switch>
            <Route exact path="/">
              <AuthenticatedHome />
            </Route>
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute path="/library">
              <Library />
            </ProtectedRoute>
            <ProtectedRoute path="/groups">
              <Groups />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/sharing">
              <Sharing />
            </ProtectedRoute>
            <ProtectedRoute path="/notifications">
              <Notifications />
            </ProtectedRoute>
            <Route path="/results" render={(props) => <Results {...props}/>}/>
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;