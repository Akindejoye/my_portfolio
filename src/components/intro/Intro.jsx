import "./intro.css";
import Developer from "../../images/developer_animie.png";
import { Link as LinkScroll } from "react-scroll";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <div className="i" id="home">
      <div className="i-left">
        <Fade bottom>
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Francis Akindejoye</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">React & React-Redux</div>
                <div className="i-title-item">NodeJs</div>
                <div className="i-title-item">MongoDB & Express</div>
                <div className="i-title-item">Solidity & Blockchain</div>
                <div className="i-title-item">HTML & CSS</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div className="i-btn-box">
              <LinkScroll className="i-btn-hire" to="contact">
                Hire Me
              </LinkScroll>
            </div>
          </div>
        </Fade>
      </div>
      <div className="i-right">
        <Fade right>
          <img src={Developer} alt="Developer" className="i-img" />
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
