import { BrowserRouter as Router, Redirect, Route, Routes, Switch } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from './context';
import Home from './Page/Home';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor:darkMode ? '#222' : '#fff', color: darkMode && '#fff'}}>
      <Router>
       
          <Switch>
            <Route exact path ="/" component={Home} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;