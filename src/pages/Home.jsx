import { useEffect, useState } from "react";

const Home = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <>
      <h1>Random Cat Fact</h1>
      <p>{fact}</p>
    </>
  );
};

export default Home;
