import "./about.css";
import MyPhoto from "../../images/my-photo-2.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about" id="about">
      <Fade bottom>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={MyPhoto} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            A Creative Front-End Developer with solid competence in building and
            optimizing the performance of user-centric, high-impact websites for
            nationwide and global companies.
            <br />
            <br />I have a verifiable history of bringing the wireframes of the
            UX designer to life through HTML5 and CSS3, as well as collaborating
            with back-end developers to create a stellar finished product, which
            has continuously helped grow revenues and deliver an
            industry-leading competitive advantage.
            <br />
            <br />
            Through my 4+ years’ experience, I have gained a wealth of knowledge
            in developing new user-facing features, determining the structure
            and design of web pages, building reusable codes, optimizing page
            loading times, and using a variety of mark-up languages to create
            web pages. I have a deep understanding of the various cloud
            platforms and how to best leverage them to meet the needs of an
            organization and have gained solid expertise across multiple APIs,
            cloud engineering, and databases. Additionally, I have successfully
            demonstrated first-rate competence in writing well-designed,
            testable, and efficient code using current best practices in web
            development, which has further sharpened my ability to launch new or
            expand existing programs, services and resources.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
