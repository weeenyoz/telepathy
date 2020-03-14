import React from 'react';
import './App.scss';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './modules/Login/LoginPage';
import Home from './modules/Home/HomeComponent';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" render={props => <LoginPage {...props} />} />
                        <Route exact path="/home/:id" render={props => <Home {...props} />} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
