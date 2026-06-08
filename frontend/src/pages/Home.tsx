import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="center">
        <div className="header">
          <h1 className="header-title">New England Sod</h1>
        </div>
        <div className="basic-info">
          <h2 id="get-started">Get Started: We Serve Connecticut</h2>
          <div className="county-buttons">
            <Link to="./counties/fairfield">
              <button className="county-button">Fairfield County</button>
            </Link>
            <Link to="./counties/new_haven">
              <button className="county-button">New Haven County</button>
            </Link>
            <Link to="./counties/hartford">
              <button className="county-button">Hartford County</button>
            </Link>
            <Link to="./counties/new_london">
              <button className="county-button">New London County</button>
            </Link>
            <Link to="./counties/middlesex">
              <button className="county-button">Middlesex County</button>
            </Link>
            <Link to="./counties/tolland">
              <button className="county-button">Tolland County</button>
            </Link>
            <Link to="./counties/litchfield">
              <button className="county-button">Litchfield County</button>
            </Link>
            <Link to="./counties/windham">
              <button className="county-button">Windham County</button>
            </Link>
          </div>
          <p id="quote">
            Get a quote today by calling{" "}
            <a href="tel:1234567890">1-800-123-4567</a> Today!
          </p>
        </div>
      </section>
      <section id="spacer"></section>
    </>
  );
}
