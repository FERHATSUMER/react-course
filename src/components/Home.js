import "./home.css";
import Data from "./data.json";
import Card from "./Card";

function Home() {
  return (
    <div className="container">
      <h1 className="heading">Junior Job Postings</h1>
      <div className="card-wrapper">
        {Data.map((p) => (
          <Card person={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
