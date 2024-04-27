import { testLink } from "./assets/data";
const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h2>Department of Computer Science</h2>
        <h3>ACPC 2K24</h3>
        <a href={testLink} className="btn hero-btn ">
          Start Assessment
        </a>
        <h4>
          Conquer The Code!
        </h4>
      </div>
    </section>
  );
};

export default Home;
