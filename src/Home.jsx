import { testLink } from "./assets/data";
const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h2>Department of Computer Science</h2>

        <a href={testLink} className="btn hero-btn ">
          Start Assessment
        </a>
        <h4>
          You are Honest Enough by Nature to be Able to See & Judge Your Self
          Confidence!
        </h4>
      </div>
    </section>
  );
};

export default Home;
