import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, parseInt(count)));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"></label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          step="1"
          max="9"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
