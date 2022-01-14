import About from "./about/About";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import ProductList from "./productList/ProductList";
import Toggle from "./toggle/Toggle";

const Container = () => {
    return ( 
        <div>
            <Toggle />
            <Intro />
            <About />
            <ProductList/>
            <Contact />
        </div>
     );
}
 
export default Container;