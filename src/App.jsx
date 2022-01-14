import { BrowserRouter as Router, Redirect, Route, Routes, Switch } from "react-router-dom";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from './components/contact/Contact';
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from './context';
import Container from "./components/Container";
import Navigation from "./components/nav/Navigation";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor:darkMode ? '#222' : '#fff', color: darkMode && '#fff'}}>
      <Router>
          {/* <Container /> */}
          <Navigation />
          <Switch>
            <Route exact path ="/" component={Intro} />
            <Route path='/toggle' component={Toggle} />
            <Route path='/about' component={About} />
            <Route path='/product' component={ProductList} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;