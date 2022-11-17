import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";
import Fade from "react-reveal/Fade";

const ProductList = () => {
  return (
    <div className="pl" id="product">
      <Fade bottom>
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire.</h1>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default ProductList;
