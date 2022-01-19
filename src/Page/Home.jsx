import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Intro from "../components/intro/Intro";
import Navigation from "../components/nav/Navigation";
import ProductList from "../components/productList/ProductList";
import Toggle from "../components/toggle/Toggle";

const Home = () => {
    return ( 
        <div>
            <Navigation />
            {/* <Toggle /> */}
            <Intro />
            <About />
            <ProductList/>
            <Contact />
        </div>
     );
}
 
export default Home;